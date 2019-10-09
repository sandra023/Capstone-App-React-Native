import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const screenWidthInterestRow = .8*(Math.round(Dimensions.get('window').width));
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = .9*(Math.round(Dimensions.get('window').width));

export default class EditProfileScreen extends Component {
  constructor(props){
    super(props);
    const {params} = props.navigation.state

    this.state = {
        currentUser: params.currentUser,
        aboutOne: params.currentUser.aboutOne,
        aboutTwo: params.currentUser.aboutTwo,
        aboutThree: params.currentUser.aboutThree,
        aboutFour: params.currentUser.aboutFour,
        // aboutOne: this.state.currentUser.aboutOne,
        // aboutTwo: this.state.currentUser.aboutTwo,
        // aboutThree: this.state.currentUser.aboutThree,
        // aboutFour: this.state.currentUser.aboutFour,
    };
}


editAboutMe = async () => {
    console.log("About me hit")
    console.log('first this.state: ', this.state)
    this.handleFormChange()
    console.log('handleFormChangeHit')
    console.log("updated current user: ", await this.state.currentUser) 
    console.log("this.state: ", await this.state)   
      const aboutMe = await fetch('http://capstoneeventapp.herokuapp.com/users/'+this.state.currentUser.id, {
          method: 'PUT',
          credentials: 'include',
          body: JSON.stringify(this.state.currentUser),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      if (aboutMe.status === 200){    
          this.setUser()
          // Alert.alert(
          //   'Your profile has been updated',
          //   '',
          //  [ {text: 'Finished', onPress: () => this.props.navigation.navigate('ProfileLandingPage',{currentUser: this.state.currentUser})}],
          //  );
          console.log("Successfuly added About Me")
          console.log("after register state: ", await this.state)  
          this.props.navigation.navigate('AccountPage',{currentUser: this.state.currentUser})
      } else {
          console.log("Ahh, that's not it!")
      }
}

setUser =() => {
    this.setState({
    currentUser: this.state.currentUser,
})
}

handleFormChange = () => {
    // this.checkForNull()
    this.setState({
        currentUser: {...this.state.currentUser,
        aboutOne: this.state.aboutOne,
        aboutTwo: this.state.aboutTwo,
        aboutThree: this.state.aboutThree,
        aboutFour: this.state.aboutFour
        }
        // [e.target.name]: e.target.value}
    })
    console.log("Handle Form change Hit, currentUser: ", this.state.currentUser)
}

Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    // const {navigation} = this.props;
    // const {state} = this.props.navigation;
    const {navigate} = this.props.navigation
    console.log("this.state.currentUser from EditProfile",this.state.currentUser)
    return (
      
      <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // backgroundColor: 'grey',
          bottom: 0, 
          paddingBottom: 30,
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
          source={require('../images/messagesThree.png')}
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
        <TextInput 
          multiline={true}
          style={styles.textInputbox}
          defaultValue={this.state.currentUser.aboutOne}
          placeholderTextColor= '#5B616B'
          color= '#5B616B'
          fontWeight= 'bold'
          fontSize= '16'
          onChangeText={(text) => this.setState({'aboutOne': text})}
          />
        <TextInput style={styles.textInputbox}
          multiline={true}
          color= '#5B616B'
          fontWeight= 'bold'
          fontSize= '16'
          defaultValue={this.state.currentUser.aboutTwo}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutTwo': text})}
          />
        <TextInput style={styles.textInputbox}
          multiline={true}
          color= '#5B616B'
          fontWeight= 'bold'
          fontSize= '16'          
          defaultValue={this.state.currentUser.aboutThree}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutThree': text})}
        />
        <TextInput style={styles.textInputbox}
          multiline={true}
          color= '#5B616B'
          fontWeight= 'bold'
          fontSize= '16'          
          defaultValue={this.state.currentUser.aboutFour}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutFour': text})}
        />
        </View>
        <TouchableOpacity 
             onPress={() => this.editAboutMe() }> 
            <Text style={styles.continue} >Save Changes</Text>
        </TouchableOpacity>
      </View>

      </ScrollView>
    </View>
    );
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
    headerLeft: 
      <TouchableOpacity onPress={() => {navigation.navigate('ProfileLandingPage',{currentUser: navigation.state.params.currentUser})} } >
        <Image style={styles.headerLeft} source={require('../images/back.png')} />
      </TouchableOpacity>,
    // headerRight: 
    //   <TouchableOpacity onPress={() => {navigation.navigate('Events',{currentUser: navigation.state.params.currentUser})} } >
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
  headerRight:{
    height: 35,
    width: 35,
    marginTop: 55,
    marginRight: 10,
    // padding: 20
  },
  headerLeft:{
    height: 23,
    width: 15,
    marginTop: 45,
    marginLeft: 15
  },
  text: {
    top: '2%',
    left: '5%',
    alignSelf: 'flex-start'
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
  },
  rowContainer: {
    width: "95%",
    flexDirection: 'row',
    marginLeft: '1%',
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
  },
  textInputbox: {
    color: '#5B616B',
    backgroundColor: '#D6D7D9',
    paddingTop: '6%',
    padding: '6%',
    marginTop: '5%',
    width: 320,
    borderRadius: 25,
  },
  continue:{
    alignSelf: 'center',
    backgroundColor: '#019BBE',
    borderRadius: 25,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    marginLeft: -15,
    textAlign:'center',
    width: '95%',
    bottom: -25,
    marginBottom: '8%'
  },

  aboutMeBubble: {
    alignItems: 'center',
    borderRadius: 20,
    marginRight: '5%',
    marginLeft: '0%',
    bottom: 0, 
    left: 0, 
    right: 0,
    width: 320,
    padding: '5%',
    paddingBottom: 0
  },

})