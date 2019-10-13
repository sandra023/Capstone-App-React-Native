import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {Dimensions } from "react-native";
// import { WebBrowser } from 'expo-web-browser';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const imageSize = Math.round((Dimensions.get('window').height)*.88);
const eventPageWidth = Math.round(Dimensions.get('window').width*.90);

export default class EventsScreen extends Component {
  constructor(props) {
    super(props)
    const {params} = props.navigation.state
    this.state = {
      currentUser: params.currentUser,
      userNumber: 0,
      postNumber: 0, 
      loading: true
    };
  }

  componentDidMount() {
     this.fetchedPosts()
  
  }


  fetchedPosts = async () => {
    const fetchedPosts = await fetch(`http://capstoneeventapp.herokuapp.com/posts`, {
      method: 'GET',
      credentials: 'include',
  })
    const fetchedPostsJSON = await fetchedPosts.json()

    let arrayNumber = (fetchedPostsJSON.length)-((fetchedPostsJSON.length)-this.state.userNumber)
    let postNumber = (fetchedPostsJSON[arrayNumber].user.posts.length)-((fetchedPostsJSON[arrayNumber].user.posts.length)-this.state.postNumber)
    this.setState({
      allFetchedPosts: fetchedPostsJSON,
      fetchedPost: fetchedPostsJSON[arrayNumber].user.posts[postNumber],
      userNumber: this.state.userNumber++,
      postNumber: this.state.postNumber++,
      loading: false

    })
  }


  // loadNextEvent = () => {
  //   let arrayNumber = (fetchedPostsJSON.length)-((fetchedPostsJSON.length)-this.state.userNumber)
  //   let postNumber = (fetchedPostsJSON[arrayNumber].user.posts.length)-((fetchedPostsJSON[arrayNumber].user.posts.length)-this.state.postNumber)
  //   this.setState({
  //     fetchedPost: fetchedPostsJSON[arrayNumber].user.posts[postNumber],
  //     userNumber: this.state.userNumber++,
  //     postNumber: this.state.postNumber++,
  //     loading: false

  // }

  loopOverPosts = async () => {
    let i;
    for(i=0; i<this.state.allPosts.length; i++){
      for(let x=0; x<this.state.allPosts[i].user.posts.length; x++){
        this.setState({
          creatorOfEvent: await this.state.allPosts[i].user,
          eventDetais: await this.state.allPosts[i].user.posts[x],
      })
      console.log('i',i)
      console.log('x',x)
      break;
      }
    }
  }
  
  getAPost = async ()=> {
    
    console.log(await this.state.creatorOfEvent)
    console.log(await this.state.eventDetails)


  }
  
  render() {
    const {navigation} = this.props;
    const {state} = this.props.navigation;
    console.log('this.state from Events',this.state)
    // console.log("this.props.navigation.state Events,",this.props.navigation.state)
    // console.log("navigation.state.params.currentuser Events: ",  navigation.state.params.currentUser)
    // console.log("state.params from events page Events: ", state.params)
    if(this.state.loading){
      return <Text>'Loading...'</Text>
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
            // paddingBottom: -30,
        }}>
     
        <View style={styles.imageContainer}>
          {/* have to do an api call for posts and take the fisrt one. later it will be by soonest date */}
        <ImageBackground
          source={
            require('../images/pickAPhoto/outdoorsPhoto.jpeg')
            // this.state.fetchedPost.eventPhoto
          }
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
          {/* <Text style={styles.daysLeft}>Hiking Pikes Peak</Text>
          <Text style={styles.quickInfo}>Pikes Peak Trail </Text>
          <Text style={styles.quickInfo}>Friday, Aug 27th </Text>
          <Text style={styles.quickInfo}>7:30 am </Text> */}
          <Text style={styles.daysLeft}>{this.state.fetchedPost.name}</Text>
          <Text style={styles.quickInfo}>{this.state.fetchedPost.location} </Text>
          <Text style={styles.quickInfo}>{this.state.fetchedPost.date}</Text>
          <Text style={styles.quickInfo}>{this.state.fetchedPost.time}</Text>
          <TouchableOpacity style={styles.nextButtonContainer}>
            <Image source = {require('../images/nextButton.png')}
            style={styles.nextButton}/>
          </TouchableOpacity>
          </View>
        <View style={styles.mainInfo}>
        <View style={styles.interestRowsContainer}>
            <View style={styles.interestRows}>            
              {this.state.fetchedPost.education === "true" ? <Image source={require('../images/interestTags/educationTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.outdoors === "true" ? <Image source={require('../images/interestTags/outdoorsTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.sports === "true" ? <Image source={require('../images/interestTags/sportsTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.events === "true" ? <Image source={require('../images/interestTags/eventsTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.educations === "true" ? <Image source={require('../images/interestTags/eventsTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.food === "true" ? <Image source={require('../images/interestTags/foodTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.wellness === "true" ? <Image source={require('../images/interestTags/meditationTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.children === "true" ? <Image source={require('../images/interestTags/childrenTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.travel === "true" ? <Image source={require('../images/interestTags/travelTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.volunteer === "true" ? <Image source={require('../images/interestTags/volunteerTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.art === "true" ? <Image source={require('../images/interestTags/artTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.tech === "true" ? <Image source={require('../images/interestTags/techTag.png')} style={styles.interestTag}/> : null}
              {this.state.fetchedPost.drink === "true" ? <Image source={require('../images/interestTags/drinkTag.png')} style={styles.interestTag}/> : null}
            </View>
          </View>
          {/* <Text style={styles.aboutEvent}>
          Come join our crew as we climb Pikes Peak. New hikers to advanced hikers are welcome, and we will help you reach the summit. We are crew of 20-30 year olds who love being in the outdoors, and enjoy meeting new people. Also, if you need suggestions on hiking gear, hit us up and we can help. It will be an early hike so don’t forget to set that alarm.

          </Text> */}
          
          <Text style={styles.aboutEvent}>{this.state.fetchedPost.about}</Text>
         
          <View style={styles.eventLinkRow}>
          <Entypo name="location-pin" size={32} style={styles.icon} onPress={this.handleOpenWithLinking}></Entypo>
            <Button
              icon= {<Entypo name="location-pin" size={32} style={styles.icon}></Entypo>}
              iconLeft
              title="Pikes Peak Trailhead" //{} probably state.params or something
              onPress={this.handleOpenWithLinking}
              style={styles.button}
            />
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
            <Text style={styles.viewMore} onPress={() => navigate('Events', {screen: 'Register'}) }>View More</Text>
          </View>
          <View style={styles.hostedByContainerRow}>
             <Text style={styles.hostByText}>Hosted by: {}</Text> 
             <TouchableOpacity onPress={() => {
                alert('You tapped the button!');
                }}style={styles.touchableOpacity}>
              <Image 
                  source={
                    require('../images/profilePic.png') //link to host's first profile pic
                  }
                  style={styles.hostPic}    
                />
            </TouchableOpacity>
          </View>
          
          <View style={styles.footer}></View>
        </View>
        </ScrollView>
      </View>
    );
  }
  
  handleOpenWithLinking = () => {
    Linking.openURL('https://www.pikes-peak.com/hiking-pikes-peak-mountain/');  // {} this will have a variable with linking to the website
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Events',
    headerLeft: 
      <TouchableOpacity onPress={() => {navigation.navigate('ProfileLandingPage',{currentUser: navigation.state.params.currentUser})} } >
        <Image style={styles.headerLeft} source={require('../images/user-circle.png')} />
      </TouchableOpacity>,
    headerRight: 
    // <TouchableOpacity onPress={() => {navigation.navigate('Profile',{...this.state})} } >
    <TouchableOpacity onPress={() => {} } >
        <Image style={styles.headerRight} source={require('../images/messages.png')} />
      </TouchableOpacity>           
  });

}


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
  nextButtonContainer: {
    width: eventPageWidth,
    left: 270
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'transparent'
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
  headerRight:{
    height: 40,
    width: 40,
    marginTop: 55,
    marginRight: 10,
    // padding: 20
  },
  headerLeft:{
    height: 35,
    width: 35,
    marginTop: 50,
    marginLeft: 8
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
    flex: 1,
    width: eventPageWidth,
    overflow: 'hidden',
  },
  quickBubbleContainer: {
    width: eventPageWidth,
    top: '-16%',
    height: '22%',
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
    borderRadius: 20
  },
  footer: {
    top: '-4%',
    height: '10%',
    backgroundColor: '#dce2e6',
    borderRadius: 25
  }

})


// fetchedPosts = async () => {
//   const fetchedPosts = await fetch(`http://capstoneeventapp.herokuapp.com/posts`, {
//     method: 'GET',
//     credentials: 'include',
// })
//   const fetchedPosts = await fetchedPosts.json()
// }
// loopOverPosts = async () => {
//   let i;
//   for(i=0; i<fetchedPosts.length; i++){
//     for(let x=0; x<fetchedPosts[i].user.posts.length; x++){
//       this.setState({
//         creatorOfEvent: await fetchedPostsJson[i].user,
//         eventDetais: await fetchedPostsJson[i].user.posts[x],
//     })
//     console.log('i',i)
//     console.log('x',x)
//     break;
//     }
//   }
// }

// getAPost = ()=> {
//   this.fetchedPosts()
//   this.loopOverPosts()

// }
