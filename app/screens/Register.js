import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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

    handleRegister = () => {
        this.setState({
            currentUser: {...this.state.currentUser,
            loggedIn: true
            }
        })
      }
      checkRegister = () => {
        if (!this.validateForm()){
            Alert.alert(
                'Register Error',
                'Please fill all both fields correctly.'
            )
        }
        if (this.state.registerClicked === false){
            this.registerUser()
        }
    }
    registerUser = async (e) => {
        console.log("register user hit")
        const validatedForm = this.validateForm()
        if (this.state.confirmPassword != this.state.password){
            alert("Passwords do not match. \n Please try again.");
        }else{
            if(validatedForm){
                this.setState({
                    registerClicked: true
                })
            const register = await fetch('http://capstoneeventapp.herokuapp.com/users', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            this.handleRegister();
            // console.log("register", register)
            const parsedRegister = await register.json()
            console.log('response from register: ', await parsedRegister)
            if (register.status === 200){
                this.setState({
                currentUser: parsedRegister
                })        
                console.log("Successfuly Registered")
                console.log("currentUser: ", await this.state.currentUser)
                this.props.navigation.navigate('InterestedIn',{currentUser: this.state.currentUser});    
            } else {
                Alert.alert(
                    'Email Address Already Registered',
                    // 'Please '
                )
                console.log("Ahh, that's not it!")
            }
            }
        }
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>
            <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.logotext}>{'Make new friends \n doing what you love'}</Text>
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
    text: {
        fontSize: 30,
        marginTop: '24%',
        textAlign: 'center',
        color: "#019bbe",
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    logotext: {
        fontSize: 30,
        marginTop: '15%',
        marginBottom: '-15%',
        textAlign: 'center',
        color: "#019bbe",
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
        bottom: "-20%",
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
        bottom: 50,
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
        bottom: 25

    }
})