import React, {Component} from 'react';
import{
    StyleSheet,
    Animated, 
    ScrollView,
    Text,
    View,
    Header,
    Alert,
    TextInput,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';
import { FontAwesome } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import App from '../../App.js'
import ProfileScreen from './ProfileComplete';


  
const myButton = (
    <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
      Login with Facebook
    </FontAwesome.Button>
  );


export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    validateForm(){
        console.log('validate form')
        return (
            this.state.email.length > 0 && this.state.password.length > 0
        ) 
    }

    loginUser = async () => {
        console.log("loginUserHit")
        const validatedForm = this.validateForm()
        console.log("validated form: ", validatedForm)
        if(validatedForm){
            console.log("validatedFormHit")
          const login = await fetch('http://capstoneeventapp.herokuapp.com/auth/login', {
              method: 'POST',
              credentials: 'include',
              body: JSON.stringify(this.state),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          console.log("this.state from login screen: ", this.state)
        //   console.log("const login passed")
          const parsedLogin = await login.json()
          console.log('response from login: ', await parsedLogin)
          if (login.status === 200){
              console.log("status === 200")
            this.setState({
              currentUser: parsedLogin,
            });
            // this.props.currentUser(currentUser)
            console.log("Successfuly Logged In")
            console.log("currentUser: ", await this.state.currentUser)
            // this.props.navigation.navigate('App',{currentUser: this.state.currentUser });  
            // this.props.navigation.navigate('EditProfile',{currentUser: this.state.currentUser });  
            this.props.navigation.navigate('Events',{currentUser: this.state.currentUser });  

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

   
    render(){
        console.log('login')
        const {navigate} = this.props.navigation;
        return(

            <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>
            <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
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
                        onPress={() => this.loginUser()}>
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
        // height: 50,
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
        // top: 80,
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
    // welcomeContainer: {
    //     alignItems: 'center',
    //     marginTop: 10,
    //     marginBottom: 20,
    //   },

  
})