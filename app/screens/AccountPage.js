import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidthInterestRow = .8*(Math.round(Dimensions.get('window').width));

class AccountPageScreen extends Component {
  constructor(props){
    super(props);
    const {params} = props.navigation.state

    this.state = {
      currentUser: params.currentUser,

    }
  }

  Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const {navigation} = this.props;
    const {state} = this.props.navigation;
    console.log("this.state from Profile",this.state)
    return (
      
      <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          bottom: 0, 
          left: 0, 
          right: 0,
          marginRight: 0,
          marginleft: 0,
          alignItems: 'center',
      }}>
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
      </View>
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
      </View>
      <View style={styles.text}>
      {/* <Text style={styles.name}>Name </Text> */}

      <Text style={styles.name}>{this.Capitalize(this.state.currentUser.firstName)} </Text>

      <Text style={styles.interests}>Interests:</Text> 
      
       <View style={styles.interestRowsContainer}>
        <View style={styles.interestRows}>            
          {this.state.currentUser.education === "true" ? <Image source={require('../images/interestTags/educationTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.outdoors === "true" ? <Image source={require('../images/interestTags/outdoorsTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.sports === "true" ? <Image source={require('../images/interestTags/sportsTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.events === "true" ? <Image source={require('../images/interestTags/eventsTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.educations === "true" ? <Image source={require('../images/interestTags/eventsTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.food === "true" ? <Image source={require('../images/interestTags/foodTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.meditation === "true" ? <Image source={require('../images/interestTags/meditationTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.children === "true" ? <Image source={require('../images/interestTags/childrenTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.travel === "true" ? <Image source={require('../images/interestTags/travelTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.volunteer === "true" ? <Image source={require('../images/interestTags/volunteerTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.art === "true" ? <Image source={require('../images/interestTags/artTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.tech === "true" ? <Image source={require('../images/interestTags/techTag.png')} style={styles.interestTag}/> : null}
          {this.state.currentUser.drink === "true" ? <Image source={require('../images/interestTags/drinkTag.png')} style={styles.interestTag}/> : null}
        </View>
        </View>

      <Text style={styles.moreAbout}>More about me:</Text>
      <View style={styles.aboutMeBubble}>
         <Text style={styles.aboutMeText}>{this.state.currentUser.aboutOne}</Text>
         <Text style={styles.aboutMeText}>{this.state.currentUser.aboutTwo}</Text>
         <Text style={styles.aboutMeText}>{this.state.currentUser.aboutThree}</Text>
         <Text style={styles.aboutMeText}>{this.state.currentUser.aboutFour}</Text>

      </View>
      </View>

      </ScrollView>
       </View>
    );
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
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
export default AccountPageScreen 


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
  // headerRight:{
  //   height: 32,
  //   width: 32,
  //   marginTop: 52,
  //   marginRight: 10,
  //   // padding: 20
  // },
  headerLeft:{
    height: 23,
    width: 15,
    marginTop: 45,
    marginLeft: 15
  },
  interestRows: {
    width: screenWidthInterestRow,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 35,
    marginBottom: 10,
    paddingBottom: 10
  },
  interestRowsContainer: {
    paddingTop: 15,

  },
  interestTag: {
    height: 15,
    width: '30%',
    height: '100%',
    resizeMode: 'contain',
    marginHorizontal: 4,
    marginTop: 5,
  },
  text: {
    top: '2%',
    left: '5%',
    alignSelf: 'flex-start'
  },
  interests: {
    marginTop: '10%',
    fontSize: 23,
    fontWeight: 'bold',
  },
  moreAbout:{
    marginTop: '18%',
    fontSize: 23,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    // top: '6%',
    // left: '8%',
    // alignSelf: 'flex-start'
  },
  rowContainer: {
    width: "95%",
    flexDirection: 'row',
    marginLeft: '1%',
    // backgroundColor: 'blue'
  },
  touchableOpacity: {
    alignSelf: 'center',
    margin: '1.5%',  
    width: "30%",
    paddingBottom: '1%',
    paddingTop: '1%',
    marginTop: 0
  },
  profilePics: {
    top: '10%',
    width: 100,
    height: 100,
    borderRadius: 20
    // marginLeft: "3%",
    // marginRight: "3%",
  },
  aboutMeBubble: {
    backgroundColor: '#d6d7d9',
    borderRadius: 20,
    marginTop: '2%',
    marginRight: '5%',
    marginLeft: '0%',
    bottom: 0, 
    left: 0, 
    right: 0,
    // flex: 1,
    width: 320,
    padding: '5%',
    paddingBottom: 0

  },
  aboutMeText: {
    marginTop: '1%',
    marginBottom: '10%',
    color: '#5B616B',
    fontWeight: 'bold',
    fontSize: 16
  }
})