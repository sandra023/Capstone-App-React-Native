import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { Dimensions } from "react-native";
import { StackNavigator } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default class ProfileScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        // email: '',
        // password: ''
    }
}

Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    
    const {navigation} = this.props;
    const {state} = this.props.navigation;
    // console.log("state.params.currentUser", state.params.currentUser)
    return (
      
      <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // backgroundColor: 'grey',
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
      <Text style={styles.name}>Name </Text>

      {/* <Text style={styles.name}>{this.Capitalize(state.params.currentUser.firstName)} </Text> */}

      <Text style={styles.interests}>Interests:</Text> 
      <Text style={styles.moreAbout}>More about me:</Text>
      <View style={styles.aboutMeBubble}>
          <Text style={styles.aboutMeText}> {'About One \n lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</Text>
          <Text style={styles.aboutMeText}> {'About Two \n lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</Text>
          <Text style={styles.aboutMeText}> {'About Three \n lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</Text>
          <Text style={styles.aboutMeText}> {'About Four \n lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</Text>

      </View>
      </View>

      </ScrollView>
       </View>
    );
  }
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