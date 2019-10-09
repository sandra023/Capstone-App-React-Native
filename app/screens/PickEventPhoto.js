import React, {Component} from 'react';
import{
    View,
    Text, 
    StyleSheet,
    ImageBackground,
    Image,
    Alert
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'

export default class PickEventPhotoScreen extends Component {
    constructor(props) {
        super(props);
        const {params} = props.navigation.state
    
        this.state = {
            currentUser: params.currentUser,
            art: params.art,
            children: params.children,
            drink: params.drink,
            education: params.education,
            events: params.events,
            food: params.food,
            outdoors: params.outdoors,
            wellness: params.wellness,
            sports: params.sports,
            tech: params.tech,
            travel: params.travel,
            volunteer: params.volunteer,
            imageIsChosen: false,
            name: params.name,
            location: params.location,
            date: params.date,
            about: params.about,
            url: params.url,
            time: params.time,

            educationImage: false,
            outdoorsImage: false,
            sportsImage: false,
            eventsImage: false,
            foodImage: false,
            wellnessImage: false,
            childrenImage: false,
            travelImage: false,
            volunteerImage: false,
            artImage: false,
            techImage: false,
            drinkImage: false
        };
    }
 

    render(){
        const {navigate} = this.props.navigation;
        const{navigation}=this.props;
        const {state} = this.props.navigation;
        // console.log('this.state from PickEventPhoto: ', this.state)
        // console.log("state.params.currentUser", state.params.currentUser)
        const education = !this.state.educationImage? null : require('../images/check.png') 
        const outdoors = !this.state.outdoorsImage? null : require('../images/check.png') 
        const sports = !this.state.sportsImage? null : require('../images/check.png') 
        const events = !this.state.eventsImage? null : require('../images/check.png') 
        const food = !this.state.foodImage? null : require('../images/check.png') 
        const wellness = !this.state.wellnessImage? null : require('../images/check.png') 
        const children = !this.state.childrenImage? null : require('../images/check.png') 
        const travel = !this.state.travelImage? null : require('../images/check.png') 
        const volunteer = !this.state.volunteerImage? null : require('../images/check.png') 
        const art = !this.state.artImage? null : require('../images/check.png') 
        const tech = !this.state.techImage? null : require('../images/check.png')
        const drink = !this.state.drinkImage? null :require('../images/check.png')
        let chosenImage = null
        let chosenImageUri = null
        // const check = !this.state[chosenImage] ? null : require('../images/check.png') 



    respondToClick = () => {
        if(this.state[chosenImage] === false && this.state.imageIsChosen === false){
            this.setState({ [chosenImage] : true, imageIsChosen: true, eventPhotoUri: chosenImageUri})
            console.log("this.state.eventphotoUri: ", this.state.eventPhotoUri)
            console.log("chosenImageUri", chosenImageUri)
          } else if (this.state[chosenImage] === true && this.state.imageIsChosen === true) {
            this.setState({ [chosenImage] : false, imageIsChosen: false})
          } else if (this.state[chosenImage] === false && this.state.imageIsChosen === true){
            Alert.alert(
                'One event photo only.',
                'Please remove prior photo choice.'
            )
        }
    }

    leavePickEventPhoto = () => {
        if (this.state.imageIsChosen === true){
            this.props.navigation.navigate('EventEditPreview', {...this.state})
        } else {
            Alert.alert (
                'You must choose a photo'
            )
        }
    }
        return(
            <View style={styles.container}>
                <Image 
                    source={ require('../images/pickAPhoto.png') }
                    style={styles.pickAPhoto}    
                />
                <View style={styles.rowContainer}>
                    <TouchableOpacity onPress={() => {  
                        chosenImage = 'educationImage'
                        chosenImageUri = require('../images/pickAPhoto/educationPhoto.jpeg')
                        respondToClick()
        
                     }} style={styles.touchableOpacity}>
                    <ImageBackground
                        source={require('../images/pickAPhoto/educationPhoto.jpeg')}
                        style={styles.icon}
                        imageStyle={{ borderRadius: 42.5 }}>
                        <Image 
                            source={education}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { 
                        chosenImage = 'outdoorsImage'
                        chosenImageUri = require('../images/pickAPhoto/outdoorsPhoto.jpeg')
                        respondToClick()

                     }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/outdoorsPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={outdoors}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { 
                       chosenImage = 'sportsImage'
                       chosenImageUri = require('../images/pickAPhoto/sportsPhoto.jpeg')
                       respondToClick()
                     }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/sportsPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={sports}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                    </TouchableOpacity>
                </View>



                 <View style={styles.rowContainer}>
                 <TouchableOpacity onPress={() => { 
                    chosenImage = 'eventsImage'
                    chosenImageUri = require('../images/pickAPhoto/eventsPhoto.jpeg')
                    respondToClick()
                     }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/eventsPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={events}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { 
                        chosenImage = 'foodImage'
                        chosenImageUri = require('../images/pickAPhoto/foodPhoto.jpeg')
                        respondToClick()
                    }}style={styles.touchableOpacity}>
                        <ImageBackground 
                            source={require('../images/pickAPhoto/foodPhoto.jpeg')}
                            style={styles.icon}    
                            imageStyle={{ borderRadius: 42.5 }}>
                                <Image 
                                source={food}
                                style={styles.check}    
                                /> 
                        </ImageBackground>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { 
                         chosenImage = 'wellnessImage'
                         chosenImageUri = require('../images/pickAPhoto/wellnessPhoto.jpeg')
                         respondToClick()
                     }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/wellnessPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={wellness}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                    </TouchableOpacity>
                </View> 



                <View style={styles.rowContainer}>
                <TouchableOpacity onPress={() => { 
                      chosenImage = 'childrenImage'
                      chosenImageUri = require('../images/pickAPhoto/childrenPhoto.jpeg')
                      respondToClick()
                }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/childrenPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={children}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => { 
                      chosenImage = 'travelImage'
                      chosenImageUri = require('../images/pickAPhoto/travelPhoto.jpeg')
                      respondToClick()
                }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/travelPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={travel}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => { 
                      chosenImage = 'volunteerImage'
                      chosenImageUri = require('../images/pickAPhoto/volunteerPhoto.jpeg')
                      respondToClick()
                }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/volunteerPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={volunteer}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                </TouchableOpacity> 
                </View>



                <View style={styles.rowContainer}>
                <TouchableOpacity onPress={() => { 
                      chosenImage = 'artImage'
                      chosenImageUri = require('../images/pickAPhoto/artPhoto.jpeg')
                      respondToClick()
                }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/artPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={art}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => { 
                      chosenImage = 'techImage'
                      chosenImageUri = require('../images/pickAPhoto/techPhoto.jpeg')
                      respondToClick()
                }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/techPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={tech}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { 
                      chosenImage = 'drinkImage'
                      chosenImageUri = require('../images/pickAPhoto/drinksPhoto.jpeg')
                      respondToClick()
                }}style={styles.touchableOpacity}>
                    <ImageBackground 
                        source={require('../images/pickAPhoto/drinksPhoto.jpeg')}
                        style={styles.icon}    
                        imageStyle={{ borderRadius: 42.5 }}>
                            <Image 
                            source={drink}
                            style={styles.check}    
                            /> 
                    </ImageBackground>
                </TouchableOpacity> 
                </View>




            <TouchableOpacity onPress={() => leavePickEventPhoto() }> 
                <Text style={styles.continue} >Continue</Text>
            </TouchableOpacity>
        </View>
        )
    }
    static navigationOptions = ({navigation}) => ({
        title: 'Profile',
        headerLeft: 
          <TouchableOpacity onPress={() => {navigation.navigate('AddEventDetails',{...this.state})} } >
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
    headerLeft:{
        height: 23,
        width: 15,
        marginTop: 50,
        marginLeft: 15
      },
    pickAPhoto: {
      top: "2%",
      marginBottom: '2%',
      width: '40%',
      resizeMode: 'contain'
    },
    rowContainer: {
      width: "95%",
      marginLeft: '2%',
    //   marginBottom: '4%',
      flexDirection: 'row',
      marginTop: '3%', 
    //   marginBottom: '3%',
    },
    touchableOpacity: {
      alignSelf: 'center',
      margin: '1.5%', 
      marginTop: '3%', 
      marginBottom: '3%',
      width: "70%",
      paddingBottom: '8%',
    },
    icon: {
      top: "4%",
      width: 85,
      height: 85,
      borderRadius: 42.5,
      left: 0,
      marginLeft: "3.5%",
      marginRight: "3.5%",
    },
    check: {
        // top: "4%",
        width: 88,
        height: 88,
        borderRadius: 42.5,
        left: -4,
        marginLeft: "3%",
        marginRight: "3.5%",
        padding: 7
      },
    continue:{
      backgroundColor: 'grey',
      borderRadius: 25,
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      width: 300,
      // position: 'absolute',
      bottom: -10,
      margin: 8,
      marginBottom: 15 
    //   top:'5%'
    },

    })
    
