import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Alert,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  
// const myButton = (
//     <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
//       Login with Facebook
//     </FontAwesome.Button>
// );


export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            loginClicked: false
        }
    }

    validateForm(){
        return (
            this.state.email.length > 0 && this.state.password.length > 0
        ) 
    }

    checkLogin = () => {
        if (!this.validateForm()){
            Alert.alert(
                'Login Error',
                'Please fill in both fields correctly.'
            )
        }
        if (this.state.loginClicked === false){
            this.loginUser()
        }
    }

    loginUser = async () => {
        const validatedForm = this.validateForm()
        console.log("validated form: ", validatedForm)
        if(validatedForm){
            this.setState({
                loginClicked: true
            })
          const login = await fetch('http://capstoneeventapp.herokuapp.com/auth/login', {
              method: 'POST',
              credentials: 'include',
              body: JSON.stringify(this.state),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          console.log("this.state from login screen: ", this.state)
          const parsedLogin = await login.json()
          if (login.status === 200){
              console.log("status === 200")
            this.setState({
              currentUser: parsedLogin,
            });
            this.handleLogin()
            console.log("Successfuly Logged In")
            console.log("Login currentUser: ", await this.state.currentUser)
            this.props.navigation.navigate('Events',{currentUser: this.state.currentUser});  

            } else {
                Alert.alert(
                    'Error Signing In',
                    'The username or password you entered was incorrect',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                  );
                console.log("Ahh, that's not it!")
          }   
        } 
    }
    handleLogin = () => {
        this.setState({
            currentUser: {...this.state.currentUser,
            loggedIn: true
            }
        })
      }
    
   
    render(){
        const {navigate} = this.props.navigation;
        return(
            <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>
            <KeyboardAwareScrollView contentContainerStyle={{flex:1}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Logo/>
                <TextInput 
                        style={styles.inputbox} 
                        returnKeyType="next" 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        onChangeText={value => this.setState({'email': value})}
                        placeholder = "email@address.com"
                    />
                    <TextInput 
                        style={styles.inputbox} 
                        autoCapitalize="none" 
                        returnKeyType="go" 
                        autoCorrect={false} 
                        onChangeText={value => this.setState({'password': value})}
                        secureTextEntry= {true}
                        placeholder = "Password"
                    />
                    <TouchableOpacity style={styles.touchcontainer}
                        onPress={() => this.checkLogin()}>
                        <Text 
                            style={styles.loginButton}
                            title="Sign Up"
                            color="#009BBE"
                            >Submit
                        </Text>
                    </TouchableOpacity >
                    <View style={styles.bottomView} >
                        {/* <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                            Login with Facebook
                        </FontAwesome.Button> */}
                        <Button
                            style={styles.button}
                            title="New to us? Sign Up!"
                            color="#002F56"
                            onPress = {() => navigate('Register')}
                                                  
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>

            </LinearGradient>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        bottom: 0, 
        left: 0, 
        right: 0
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    touchcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputbox: {
        width: '89%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 28,
        margin: 4,
        paddingLeft: 20,
        bottom: "-18%",
        shadowColor: "#002F56",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    loginButton:{
        backgroundColor: '#002F56',
        borderRadius: 28,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        width: '89%',
        position: 'absolute',
        bottom: -175,
        shadowColor: "#002F56",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      },
    contentContainer:{
        paddingTop: 30,
        alignItems: 'center',
        flex: 1,
        // bottom: -80
    },
    bottomView: {
        bottom:-185
    },

})