import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';

export default class RegisterForm extends Component {
    render(){
        const {navigate} = this.props.navigation;

        return(
            <View style={styles.container}>
                <View style={styles.textinput}>
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
                    </View> 
                <View style={styles.bottomView}>
                    <Button
                        style={styles.button}
                        title="Already a member? Log in!"
                        color="#002F56"
                        onPress={() => navigate('Login', {screen: 'Login'}) }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    text: {
        fontSize: 30,
        marginTop: '8%',
        marginBottom: '-15%',
        textAlign: 'center',
        color: "#019bbe",
        // height: '60%'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    touchcontainer: {
        bottom: 0,
        alignItems: 'center',
    },
    textinput:{
        alignItems: 'center',
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
        bottom: -128,
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
        bottom: -155

    }
})