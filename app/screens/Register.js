import React, {Component} from 'react';
import{
    StyleSheet,
    Animated, 
    ScrollView,
    Text,
    View,
    Header,
    TextInput,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


// const {State: TextInputState}= TextInput;

export default class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    
    }

    validateForm(){
        console.log('validate form')
        return (
            this.state.email.length > 0 && this.state.firstName.length>0 && this.state.password.length > 0
        ) 
    }

    registerUser = async (e) => {
        console.log("register user hit")
        const validatedForm = this.validateForm()
        if(validatedForm){
        const register = await fetch('http://capstoneeventapp.herokuapp.com/users', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log("register", register)
        const parsedRegister = await register.json()
        console.log('response from register: ', await parsedRegister)
        if (register.status === 200){
            this.setState({
              currentUser: parsedRegister
            })        
            console.log("Successfuly Registered")
            console.log("currentUser: ", await this.state.currentUser)
            this.props.navigation.navigate('InterestedIn');    
          } else {
            console.log("Ahh, that's not it!")
          }
        }   
    }

    render(){
        const {navigate} = this.props.navigation;
        // console.log("register page")
        return(

            <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>
            <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
                {/* <ScrollView 
                contentContainerStyle={styles.contentContainer}> */}
                    <TextInput 
                        style={styles.inputbox} 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        returnKeyType="next" 
                        onChangeText={value => this.setState({'firstName': value})}
                        placeholder = "First Name"
                    />
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
                        returnKeyType="next" 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        onChangeText={value => this.setState({'password': value})}
                        secureTextEntry= {true}
                        placeholder = "Password"
                    />
                    <TextInput 
                        style={styles.inputbox} 
                        returnKeyType="go" 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        onChangeText={value => this.setState({'confirmPassword': value})}
                        secureTextEntry= {true}
                        placeholder = "Confirm Password"
                    />
                    <TouchableOpacity style={styles.touchcontainer}
                     onPress={() => this.registerUser()}>
                        <Text
                            style={styles.loginButton}
                            title="Sign Up"
                            color="#009BBE"
                            >Create Profile
                        </Text>
                    </TouchableOpacity>
                <View style={styles.bottomView}>
                    <Button
                        style={styles.button}
                        title="Already a member? Log in!"
                        color="#002F56"
                        onPress={() => navigate('Login', {screen: 'Login'}) }
                    />
                    </View>
                {/* </ScrollView> */}
            {/* </View> */}
            </KeyboardAwareScrollView>
            </LinearGradient>
        )
    }
}

// submit(){

// }

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    touchcontainer: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    inputbox: {
        width: '89%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 28,
        margin: '1%',
        padding: 12,
        bottom: "-23%",
        shadowColor: "#002F56",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
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
        bottom: 98,
        shadowColor: "#002F56",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      },
    contentContainer: {
        paddingTop: 30,
        alignItems: 'center',
        flex: 1
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
      },
    bottomView: {
        // height: 650,
        // width: 
        bottom: 55

    }
})