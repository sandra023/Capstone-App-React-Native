import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = .4*(Math.round(Dimensions.get('window').width));

export default class YouAreAttendingScreen extends Component {

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
                    onPress={() => navigate('ProfileLandingPage', {currentUser: this.state.currentUser })}>
                        <Image 
                            source={require('../images/exit.png')}
                            style={styles.exitButton}/>
                    </TouchableOpacity>
                    
                    <Text style={styles.attendingText}>Your are attending</Text>
                    {/* <Text style={styles.attendingText}>{this.state.eventName}</Text> */}
                    
                    <View style={styles.imageRow}>
                    <ImageBackground
                        // source={this.state.currentUser.profileImage}
                        source={require('../images/profilePic.png')}
                        style={styles.profileImage}
                    />
                    <Image
                        source={require('../images/profilePic.png')}
                        // source={this.state.eventImage}
                        style = {styles.eventImage}/>
                    </View>
                    <View style={styles.whoContainer}>
                    
                    <Text style={styles.whoText}>Who is going...</Text>
                    
                    <View style={styles.rowContainer}>
                    <TouchableOpacity onPress={() => {
                        alert('You tapped the button!');
                        }}style={styles.touchableOpacity}>
                        <Image 
                        source={
                            require('../images/messagesThree.png')
                        }
                        style={styles.profilePics}    
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        alert('You tapped the button!');
                        }}style={styles.touchableOpacity}>
                        <Image 
                        source={
                            require('../images/messagesThree.png')
                        }
                        style={styles.profilePics}    
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        alert('You tapped the button!');
                        }}style={styles.touchableOpacity}>
                        <Image 
                        source={
                            require('../images/messagesThree.png')
                        }
                        style={styles.profilePics}    
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        alert('You tapped the button!');
                        }}style={styles.touchableOpacity}>
                        <Image 
                        source={
                            require('../images/messagesThree.png')
                        }
                        style={styles.profilePics}    
                        />
                    </TouchableOpacity>
                    </View>
                    {/* <Text style={styles.viewMore} onPress={() => navigate('YouAreAttending', {currentUser: navigation.state.params.currentUser }) }>View More</Text> */}
                    <Text style={styles.viewMore} onPress={() => navigate('YouAreAttending', {currentUser: this.state.currentUser }) }>View More</Text>

                </View>
                    <TouchableOpacity style={styles.groupChat}
                        onPress={() => navigate('YouAreAttending', {currentUser: this.state.currentUser})}
                        >
                        <Text 
                            style={styles.loginButton}
                            color="#009BBE"
                            >Join Group Chat
                        </Text>
                    </TouchableOpacity >
                </View>
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
    profileImage:{
        top: '15%',
        height: screenWidth,
        width: screenWidth,
        borderRadius: .5*(screenWidth),
        borderColor: 'white',
        borderWidth: 5,
    },
    eventImage:{
        top: '15%',
        height: screenWidth,
        width: screenWidth,
        borderRadius: .5*(screenWidth)
    },
    rowContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
      },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    attendingText: {
        textAlign: 'center',
        top: '25%',
        width: '75%',
        fontSize: 28,
        fontWeight: "bold"
    },
    profilePics: {
        borderRadius: 10,
        width: 40,
        height: 40,
        margin: '2%'
      },
    inviteButton:{
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