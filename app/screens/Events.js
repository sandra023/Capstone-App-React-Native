import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import {Dimensions } from "react-native";
import { WebBrowser } from 'expo-web-browser';
import { Ionicons, Entypo } from '@expo/vector-icons';





const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const imageSize = Math.round((Dimensions.get('window').height)*.88);
const eventPageWidth = Math.round(Dimensions.get('window').width*.90);

export default class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
          }}>
     
        <View style={styles.imageContainer}>
        <Image 
          // source={
          //   require('../images/messagesThree.png')
          // }
          style={styles.eventPhoto}    
        />
        </View>
        <View style={styles.quickBubbleContainer}>
          <Text style={styles.daysLeft}>Event Title</Text>
          <Text style={styles.quickInfo}>When: {}</Text>
          <Text style={styles.quickInfo}>Where: {}</Text>
        </View>
        <View style={styles.mainInfo}>
          <Text style={styles.aboutEvent}>
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.eventLinkRow}>
          <Entypo name="location-pin" size={32} style={styles.icon} onPress={this.handleOpenWithLinking}></Entypo>
            <Button
              icon= {<Entypo name="location-pin" size={32} style={styles.icon}></Entypo>}
              iconLeft
              title="Event Location Link" //{} probably state.params or something
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
            <Text style={styles.viewMore} onPress={() => navigate('Register', {screen: 'Register'}) }>View More</Text>
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
          
          <View style={styles.footer}></View>
        </View>
        </ScrollView>
      </View>
    );
  }
  
  handleOpenWithLinking = () => {
    Linking.openURL('https://google.com');  // {} this will have a variable with linking to the website
  }

}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    // backgroundColor: 'lightgrey',
    bottom: 0,
    width: eventPageWidth,
    top: '12%', 
    alignSelf: 'center',
    flex: 1,
    top: 30, 
    alignItems: 'center',
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
    overflow: 'hidden',
  },
  quickBubbleContainer: {
    width: eventPageWidth,
    top: '-17%',
    height: '22%',
    backgroundColor: 'rgba(52, 52, 52, 0.4)'
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
  footer: {
    top: '-4%',
    height: '10%',
    backgroundColor: '#dce2e6',
    borderRadius: 25

  }

})