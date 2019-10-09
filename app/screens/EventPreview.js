import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  Button,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Entypo } from '@expo/vector-icons';

const screenWidthInterestRow = .8*(Math.round(Dimensions.get('window').width));
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const imageSize = Math.round((Dimensions.get('window').height)*.88);
const eventPageWidth = Math.round(Dimensions.get('window').width*.90);

class EventPreviewScreen extends Component {
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
      newPost: {},
      name: params.name,
      location: params.location,
      date: params.date,
      about: params.about,
      url: params.url,
      time: params.time,
    
      eventPhoto: params.eventPhoto
    };
  }


  addEventDetails = async () => {
    console.log("Add event details hit")
    this.handleEventDetails()
    console.log('handleFormChangeHit')
    console.log("this.state from after handleEventDetails: ", await this.state)   
        const addEventDetails = await fetch('http://capstoneeventapp.herokuapp.com/posts', {

          method: 'POST',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.newPost)
          
      })
      const response = await addEventDetails.json();
      console.log("add event details.json: ", response)
      if (addEventDetails.status === 200){    
          console.log("Successfuly added Event Post")
          console.log("after adding event post: ", await this.state.currentUser)
          this.props.navigation.navigate('ProfileLandingPage',{currentUser: this.state.currentUser});
      } else {
          console.log("Ahh, that's not it!")
          console.log("this.state from the end of addEventDetails: ", await this.state)   

      }
  }
  
  handleEventDetails = async () => {
    console.log("handle event details hit")

    this.setState({
      newPost: {...this.state.posts,
        name: this.state.name,
        location: this.state.location,
        date: this.state.date,
        time: this.state.time,
        about: this.state.about,
        // eventPhoto: this.state.eventPhoto,
        url: this.state.url,
        user: {"id": this.state.currentUser.id},
        education: this.state.education,
        outddors: this.state.outdoors,
        sports: this.state.sports,
        events: this.state.events,
        food: this.state.food,
        wellness: this.state.wellness,
        children: this.state.children,
        travel: this.state.travel,
        volunteer: this.state.volunteer,
        art: this.state.art,
        tech: this.state.tech,
        drink: this.state.drink,
      }
    })
   
    console.log (await "this.state from end of handle Event details: ", this.state)
  }

  render() {
    const {navigation} = this.props;
    const {state} = this.props.navigation;
    const {navigate} = this.props.navigation
    console.log('this.state from EventPreviewScreen: ',this.state)
    let urlView;
    if(this.state.url=== "null"){
      urlView = null
      } else {
        urlView = <View style={styles.eventLinkRow}>
      <Entypo name="location-pin" size={32} style={styles.icon} onPress={this.handleOpenWithLinking}></Entypo>
        <Button
          icon= {<Entypo name="location-pin" size={32} style={styles.icon}></Entypo>}
          iconLeft
          title="Event Location Link" //{} probably state.params or something
          onPress={this.handleOpenWithLinking}
          style={styles.button}
        />
    </View> 
      }
    
    return (
      <View style={styles.container}>
         <ScrollView  
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            left: 0, 
            right: 0,
            marginRight: 0,
            marginleft: 0,
            alignItems: 'center', 
            paddingBottom: 80,
        }}>
        <View style={styles.imageContainer}>
        <ImageBackground
          source={this.state.eventPhoto}
          style={styles.eventPhoto}    
        >                
          <LinearGradient 
          colors={["#000000","#000000D9","#000000A6","#ffffff00","#ffffff00", "#ffffff00",]} 
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          
          style={styles.linearGradient}/>

        </ImageBackground>
        </View>
        <View style={styles.quickBubbleContainer}>
          <Text style={styles.daysLeft}>{this.state.name}</Text>
          <Text style={styles.quickInfo}>{this.state.location}</Text>
          <Text style={styles.quickInfo}>{this.state.date}</Text>
          <Text style={styles.quickInfo}>{this.state.time}</Text>
        </View>
        <View style={styles.mainInfo}>
          <View style={styles.interestRowsContainer}>
            <View style={styles.interestRows}>            
              {this.state.education === true ? <Image source={require('../images/interestTags/educationTag.png')} style={styles.interestTag}/> : null}
              {this.state.outdoors === true ? <Image source={require('../images/interestTags/outdoorsTag.png')} style={styles.interestTag}/> : null}
              {this.state.sports === true ? <Image source={require('../images/interestTags/sportsTag.png')} style={styles.interestTag}/> : null}
              {this.state.events === true ? <Image source={require('../images/interestTags/eventsTag.png')} style={styles.interestTag}/> : null}
              {this.state.educations === true ? <Image source={require('../images/interestTags/eventsTag.png')} style={styles.interestTag}/> : null}
              {this.state.food === true ? <Image source={require('../images/interestTags/foodTag.png')} style={styles.interestTag}/> : null}
              {this.state.meditation === true ? <Image source={require('../images/interestTags/meditationTag.png')} style={styles.interestTag}/> : null}
              {this.state.children === true ? <Image source={require('../images/interestTags/childrenTag.png')} style={styles.interestTag}/> : null}
              {this.state.travel === true ? <Image source={require('../images/interestTags/travelTag.png')} style={styles.interestTag}/> : null}
              {this.state.volunteer === true ? <Image source={require('../images/interestTags/volunteerTag.png')} style={styles.interestTag}/> : null}
              {this.state.art === true ? <Image source={require('../images/interestTags/artTag.png')} style={styles.interestTag}/> : null}
              {this.state.tech === true ? <Image source={require('../images/interestTags/techTag.png')} style={styles.interestTag}/> : null}
              {this.state.drink === true ? <Image source={require('../images/interestTags/drinkTag.png')} style={styles.interestTag}/> : null}
            </View>
          </View>
          <Text style={styles.aboutEvent}>
            {this.state.about}
          </Text>
    
          {urlView}
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
            <Text style={styles.viewMore} onPress={() => navigate() }>View More</Text>
          </View>
          <View style={styles.hostedByContainerRow}>
             <Text style={styles.hostByText}>Hosted by: {}</Text> 
             <TouchableOpacity onPress={() => {
                alert('You tapped the button!');
                }}style={styles.touchableOpacity}>
              <Image 
                  source={
                    require('../images/messagesThree.png') //link to host's first profile pic
                  }
                  style={styles.hostPic}    
                />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {this.addEventDetails()}} >
          <Text style={styles.postEvent}>Post Event</Text>
        </TouchableOpacity>
          <View style={styles.footer}></View>
        </View>
        </ScrollView>
      </View>
    );
  }
  
  handleOpenWithLinking = () => {
    Linking.openURL('https://google.com');  // {} this will have a variable with linking to the website
  }

  static navigationOptions = ({navigation}) => ({
    title: 'EventPreview',
    headerLeft: 
      <TouchableOpacity style={styles.postButton} onPress={() => {navigation.navigate('EventEditPreview',{...this.state})} } >
        <Image style={styles.headerLeft} source={require('../images/back.png')} />
      </TouchableOpacity>,
    // headerRight: 
    // // <TouchableOpacity onPress={() => {navigation.navigate('Profile',{...this.state})} } >
    // <TouchableOpacity onPress={() => {navigation.navigate('Profile',{currentUser: navigation.state.params.currentUser})} } >
    //     <Image style={styles.headerRight} source={require('../images/messages.png')} />
    //   </TouchableOpacity>           
  });
}

export default EventPreviewScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    bottom: 0,
    width: eventPageWidth,
    // top: '12%', 
    alignSelf: 'center',
    flex: 1,
    top: 30, 
    alignItems: 'center',
  },
  interestRows: {
    width: eventPageWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 35,
    marginBottom: 10,
    paddingBottom: 10,
    justifyContent: 'center'
  },
  interestRowsContainer: {
    paddingVertical: 10,
  },
  interestTag: {
    height: 15,
    width: '30%',
    height: '100%',
    resizeMode: 'contain',
    marginHorizontal: 4,
    marginTop: 5,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'transparent'
},
  headerRight:{
    height: 40,
    width: 40,
    marginTop: 55,
    marginRight: 10,
    // padding: 20
  },
  headerLeft:{
    height: 23,
    width: 15,
    marginTop: 50,
    marginLeft: 15
  },
  viewMore: {
    alignSelf: 'flex-end',
    padding: '2%',
    paddingRight:  '22%',
    fontSize: 16,
    color: 'blue'
  },
  button: {
    marginLeft: 0,
    height: '120%'
  },
  icon: {
    height: '120%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  profilePics: {
    // height: '50%',
    // width: '50%',
    borderRadius: 10,
    width: 40,
    height: 40,
    margin: '2%'
  },
  imageContainer: {
    marginTop: 10,
    backgroundColor: 'darkgrey',
    width: eventPageWidth,
    borderRadius: 25,
    overflow: 'hidden',
    height: imageSize
  },
  eventPhoto: {
    width: eventPageWidth,
    flex: 1,
    // resizeMode: 'center',
    // overflow: 'hidden',
  },
  quickBubbleContainer: {
    width: eventPageWidth,
    top: '-17%',
    height: '22%',
    // backgroundColor: 'rgba(52, 52, 52, 0.7)'
  },
  quickInfo: {
    marginLeft: '5%',
    padding: '1%',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  daysLeft: {
    padding: '3%',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  mainInfo: {
    width: eventPageWidth,
    top: '-25%',
    flex: 1,
    backgroundColor: '#dce2e6'

  },
  aboutEvent:{
    marginLeft: '6%',
    marginRight: '6%',
    padding: '5%',
    color: 'black',
    fontSize: 17,
    paddingBottom: '10%' 

  },
  eventLinkRow:{
    flexDirection: "row",
    paddingLeft: '15%',  
  },
  whoContainer: {
    marginTop: '5%',
    paddingBottom: '5%'
  },
  whoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: '6%',
    paddingLeft: '15%',
  },
  hostByText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: '6%',
    paddingLeft: '15%'
  },
  hostedByContainerRow: {
    paddingTop: '15%',
    flexDirection: 'row',
    marginBottom: '15%' ,
    overflow: 'hidden',
  },
  hostPic: {
    width: 80,
    height: 80,
  },
  postEvent:{
    alignSelf: 'center',
    backgroundColor: '#9ACBEA',
    borderRadius: 25,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: 300,
    top: -20
  },
  footer: {
    top: '-4%',
    height: '10%',
    backgroundColor: '#dce2e6',
    borderRadius: 25
  }

})





// handleEventDetails = () => {
//   this.setState({
//     currentUser: {...this.state.currentUser.posts[
    
//     {name: this.state.name,
//     location: this.state.location,
//     date: this.state.date,
//     time: this.state.time,
//     about: this.state.about,

//     education: this.state.education,
//     outddors: this.state.outdoors,
//     sports: this.state.sports,
//     events: this.state.events,
//     food: this.state.food,
//     wellness: this.state.wellness,
//     children: this.state.children,
//     travel: this.state.travel,
//     volunteer: this.state.volunteer,
//     art: this.state.art,
//     tech: this.state.tech,
//     drink: this.state.drink,

//     eventPhoto: this.state.eventPhoto

//     }
//     ]

   
//     }
//   })
// }

    // let posts = await [...this.state.posts];
    // posts.push({
    //     name: this.state.name,
    //     location: this.state.location,
    //     date: this.state.date,
    //     time: this.state.time,
    //     about: this.state.about,
    //     eventPhoto: this.state.eventPhoto,
    //     url: this.state.url,
    //     id: this.state.currentUser.id,
    //     education: this.state.education,
    //     outddors: this.state.outdoors,
    //     sports: this.state.sports,
    //     events: this.state.events,
    //     food: this.state.food,
    //     wellness: this.state.wellness,
    //     children: this.state.children,
    //     travel: this.state.travel,
    //     volunteer: this.state.volunteer,
    //     art: this.state.art,
    //     tech: this.state.tech,
    //     drink: this.state.drink,
    
    // })