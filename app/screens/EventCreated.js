import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = .5*(Math.round(Dimensions.get('window').width));

class EventCreatedScreen extends Component {

    constructor(props){
        super(props);
        const {params} = props.navigation.state
        this.state = {
            currentUser: params.currentUser,
            eventImage: params.eventImage
        }
    }

    
   
    render(){
        const {navigate} = this.props.navigation;
        const {navigation} = this.props;
        const {state} = this.props.navigation;
        console.log('this.state from EventCreatedScreen: ',this.state)

        return(
            <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.exitButtonContainer}
                    onPress={() => navigate('ProfileLandingPage', {currentUser: navigation.state.params.currentUser })}>
                        <Image 
                            source={require('../images/exit.png')}
                            style={styles.exitButton}/>
                    </TouchableOpacity>
                    
                    <Image 
                        source={this.state.eventImage}
                        style = {styles.eventImage}/>

                    <Text style={styles.eventCreatedText}>{'Your event \n has been created!'}</Text>
                  
                    <TouchableOpacity style={styles.findEvents}
                        onPress={() => navigate('Events', {currentUser: navigation.state.params.currentUser })}
                        >
                        <Text 
                            style={styles.loginButton}
                            color="#009BBE"
                            >Find More Events
                        </Text>
                    </TouchableOpacity >
                </View>
            </LinearGradient>
        )
    }
    
}
export default EventCreatedScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        bottom: 0, 
        left: 0, 
        right: 0,
    },
    exitButton: {
        alignSelf: 'flex-start',
        height: 35,
        width: 35,
        marginTop: 50,
        marginLeft: 8
    },
    exitButtonContainer:{
        alignSelf: 'flex-start',
    },
    eventImage: {
        top: '15%',
        height: screenWidth,
        width: screenWidth,
        borderRadius: .5*(screenWidth)
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    eventCreatedText: {
        textAlign: 'center',
        top: '25%',
        width: '75%',
        fontSize: 25,
        fontWeight: "bold"
    },
    findEvents: {
        top: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginButton:{
        backgroundColor: '#009BBE',
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