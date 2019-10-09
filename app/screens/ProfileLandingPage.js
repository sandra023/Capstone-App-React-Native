import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text, 
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {Dimensions } from "react-native";

// import {TouchableOpacity} from 'react-native-gesture-handler';

const screenWidth = .85*(Math.round(Dimensions.get('window').width));

export default class ProfileLandingPageScreen extends Component {
    constructor(props){
        super(props)
        const {params} = props.navigation.state
        this.state = {
            currentUser: params.currentUser
        }
    }

    render(){
        // console.log("state.params.currentUser", state.params.currentUser)
        const {navigate} = this.props.navigation
            const {navigation} = this.props;
    const {state} = this.props.navigation;
        console.log("this.state from ProfileLandingPage: ", this.state)
        console.log("this.props.navigation.state, PLP ",this.props.navigation.state)
        console.log("navigation.state.params.currentuser PLP: ",  navigation.state.params.currentUser)
        // console.log("state.params.currentUser", state.params.currentUser)
        console.log("state.params from ProfileLandingPage: ", state.params)
        return(
            <View style={styles.container}>
                <ImageBackground style={{
                     marginTop: 30,
                     width: 150,
                     height: 150,
                     borderRadius: 75
                }}
                imageStyle={{ borderRadius: 75 }} 
                source={require('../images/profilePic.png')} >
                 
                    <TouchableOpacity onPress={() => navigate('EditProfile', {currentUser: navigation.state.params.currentUser })} style={styles.editButton} >
                        <Image source={require('../images/editProfile.png')} style={styles.editProfilePic} />
                    </TouchableOpacity>
                </ImageBackground> 
                
                <TouchableOpacity onPress={() => navigate('NewEventInterestedIn', {currentUser: this.state.currentUser}) } style={styles.eventBubble}>
                    <Image source={require('../images/eventsBlock.png')} style={styles.createEventBubble}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('ProfileLandingPage', {currentUser: this.state.currentUser}) } style={styles.boostSpotlightRow}>
                    <Image source={require('../images/spotlightLeft.png')} style={styles.spotlight}/>
                    <Image source={require('../images/boostRight.png')} style={styles.boost}/>
                </TouchableOpacity>
            </View>
        )
    }

    static navigationOptions = ({navigation}) => ({
        title: 'ProfileLandingPage',
        headerLeft: 
        <TouchableOpacity onPress={() => {navigation.navigate('Events',{currentUser: navigation.state.params.currentUser})} } >
            <Image style={styles.headerLeft} source={require('../images/back.png')} />
        </TouchableOpacity>,
        // headerRight: 
        //   <TouchableOpacity onPress={() => {navigation.navigate('EditProfile',{currentUser: navigation.state.params.currentUser})} } >
        //     <Image style={styles.headerRight} source={require('../images/greysetting.png')} />
        //     {/* <ion-icon  style={styles.headerRight} name="settings"></ion-icon> */}
    
        //   </TouchableOpacity>           
      });
    
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute', 
      top: 30, 
      bottom: 0, 
      left: 0, 
      right: 0,
      alignItems: 'center',
    },
    editButton: {
    },
    boostSpotlightRow: {
        marginLeft: '1%',
        top: 25,
        width: screenWidth,
        height: '30%',
        resizeMode: 'contain',
        flexDirection: 'row'
    },
    spotlight: {
        resizeMode: 'contain',
        width: '50%',
        height: '100%'
    },
    boost: {
        resizeMode: 'contain',
        width: '50.5%',
        height: '100%'
    },
    createEventBubble: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    eventBubble: {
        top: 25,
        // marginTop: 40,
        width: screenWidth,
        height: '30%',
        resizeMode: 'contain',
    },
    headerLeft:{
        height: 23,
        width: 15,
        marginTop: 45,
        marginLeft: 15
      },
    profilePic: {
        marginTop: 30,
        width: 150,
        height: 150,
        borderRadius: 75
    },
    editProfilePic: {
        marginTop: 69,
        marginLeft: 63,
        height: 120,
        width: 120,
        overflow: 'visible',
    },

})
