import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
import {Dimensions } from "react-native";


const screenWidth = (Math.round(Dimensions.get('window').width));
const imageScreenHeight = .30*(Math.round(Dimensions.get('window').height));
const screenWidthInterestRow = .8*(Math.round(Dimensions.get('window').width));

class AddEventDetailsScreen extends Component {
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
      name: 'null',
      location: 'null',
      date: 'null',
      about: 'null',
      url: 'null',
      time: 'null'
 
    };
  }




  render() {
    const {navigate} = this.props.navigation
    const {state} = this.props.navigation;
    // console.log('state.params from AddEventDetails: ', state.params)
    console.log('this.state from AddEventDetails: ', this.state)
    // console.log("state.params.currentUser: ", state.params.currentUser)
  
    return (
      <View style={styles.container}>
        <ScrollView  
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            width: screenWidth,
            // top: 30,
            left: 0, 
            right: 0,
            marginRight: 0,
            marginleft: 0,
            alignItems: 'center', 
            paddingBottom: 100,
        }}>
        <ImageBackground style={{
                    width: screenWidth,
                    height: imageScreenHeight,
                //  resizeMode: 'contain'
            }}
          imageStyle={{  height: '100%'}} 
          source={require('../images/addEventImage.png')} >
                
          <TouchableOpacity onPress={() => addEventImage()} style={styles.addEventPhoto}>
              <Image source={require('../images/addEventPhoto.png')} style={styles.addEventPhoto} />
          </TouchableOpacity>
        </ImageBackground>

       <View style={styles.textInputContainer}>
        <View style={styles.textInput}>
          <Image
            source={require('../images/eventNameIcon.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            style={{ flex: 1, color: '#5B616B'}}
            placeholder="Event Name"
            placeholderTextColor= '#5B616B'
            onChangeText={(text) => this.setState({'name': text})}
          />
        </View>      

        <View style={styles.textInput}>
          <Image
            source={require('../images/addEventLocationIcon.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            style={{ flex: 1, color: '#5B616B'}}
            placeholder="Event Location"
            placeholderTextColor= '#5B616B'
            onChangeText={(text) => this.setState({'location': text})}
          />
        </View>    

        <View style={styles.textInput}>
          <Image
            source={require('../images/addEventDateIcon.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            style={{ flex: 1, color: '#5B616B'}}
            placeholder="Event Date"
            placeholderTextColor= '#5B616B'
            onChangeText={(text) => this.setState({'date': text})}
          />
        </View>    

        <View style={styles.textInput}>
          <Image
            source={require('../images/addEventTimeIcon.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            style={{ flex: 1, color: '#5B616B'}}
            placeholder="Event Time"
            placeholderTextColor= '#5B616B'
            onChangeText={(text) => this.setState({'time': text})}
          />
        </View>    

        <TextInput style={styles.aboutInputbox}
          multiline={true}
          numberOfLines={4}
          defaultValue= {"About Event: "}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'about': text})}
        />
        </View>
        
      <TouchableOpacity onPress={() => navigate('PickEventPhoto', {...this.state})} >
          <Text style={styles.continue} >Continue</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
    );
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
    headerLeft: 
      <TouchableOpacity onPress={() => {navigation.navigate('NewEventInterestedIn',{...this.state})} } >
        <Image style={styles.headerLeft} source={require('../images/back.png')} />
      </TouchableOpacity>,
  
  });
}

export default AddEventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30, 
    bottom: 0, 
    width: screenWidth,
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: 20,
    paddingTop: 10
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6D7D9',
    height: 45,
    borderRadius: 7,
    marginTop: 10,
    width: screenWidthInterestRow,
    borderRadius: 7,
    top: -30,
  },
 
  ImageStyle: {
    // padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  headerLeft:{
    height: 23,
    width: 15,
    marginTop: 50,
    marginLeft: 15
  },
  addEventPhoto:{
    height: 45,
    width: 45,
    marginTop: '20%',
    marginLeft: '72%',
    shadowColor: "#002F56",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.74,
    shadowRadius: 10.27,
    borderRadius: 22.5
  },

  aboutInputbox: {
    color: '#5B616B',
    backgroundColor: '#D6D7D9',
    width: screenWidthInterestRow,
    paddingTop: '3%',
    paddingLeft: '4%',
    paddingRight: '5%',
    marginTop: '4%',
    borderRadius: 7,
    height: imageScreenHeight,
    paddingBottom: '6%',
    top: -30
  },
  continue:{
    backgroundColor: '#019BBE',
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
})