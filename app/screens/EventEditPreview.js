import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Alert
} from 'react-native';
import {Dimensions } from "react-native";


const screenWidthInterestRow = .8*(Math.round(Dimensions.get('window').width));
const screenWidth = (Math.round(Dimensions.get('window').width));
const imageScreenHeight = .30*(Math.round(Dimensions.get('window').height));

class EventEditPreviewScreen extends Component {
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
   
      name: params.name,
      location: params.location,
      date: params.date,
      about: params.about,
      url: params.url,
      time: params.time,
    
      eventPhoto: params.eventPhotoUri
    };
  }

  sendToConfirm = () => {
    Alert.alert(
      'Confirm Event',
      'Please review your event. Then click "Post Event" at the bottom of the page.'
    )
    this.props.navigation.navigate('EventPreview',{...this.state})
  }


  render() {
    const {navigate} = this.props.navigation
    const {state} = this.props.navigation;
    console.log('this.state from EditEventPreview: ', this.state)

    return (
      <View style={styles.container}>
        <ScrollView  
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            width: screenWidth,
            top: 30,
            left: 0, 
            right: 0,
            marginRight: 0,
            marginleft: 0,
            alignItems: 'center', 
            paddingBottom: 100,
        }}>
        <ImageBackground style={{
                  width: screenWidthInterestRow,
                  height: imageScreenHeight,
                  resizeMode: 'contain'
          }}
          imageStyle={{  
              marginTop: -35, 
              height: '100%'}} 
          source={this.state.eventPhoto}>

          <TouchableOpacity onPress={() => uploadEventPhoto()} style={styles.addEventPhoto}>
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
            placeholder={this.state.name}
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
            placeholder={this.state.location}
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
            placeholder={this.state.date}
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
            placeholder={this.state.time}
            placeholderTextColor= '#5B616B'
            onChangeText={(text) => this.setState({'time': text})}
          />
        </View>    

        <TextInput style={styles.aboutInputbox}
          multiline={true}
          defaultValue= {this.state.about}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'about': text})}
        />
         <View style={styles.interestRowsContainer}>
        <View style={styles.interestRows}>            
          {this.state.education === "true" ? <Image source={require('../images/interestTags/educationTag.png')} style={styles.interestTag}/> : null}
          {this.state.outdoors === "true" ? <Image source={require('../images/interestTags/outdoorsTag.png')} style={styles.interestTag}/> : null}
          {this.state.sports === "true" ? <Image source={require('../images/interestTags/sportsTag.png')} style={styles.interestTag}/> : null}
          {this.state.events === "true" ? <Image source={require('../images/interestTags/eventsTag.png')} style={styles.interestTag}/> : null}
          {this.state.educations === "true" ? <Image source={require('../images/interestTags/eventsTag.png')} style={styles.interestTag}/> : null}
          {this.state.food === "true" ? <Image source={require('../images/interestTags/foodTag.png')} style={styles.interestTag}/> : null}
          {this.state.wellness === "true" ? <Image source={require('../images/interestTags/meditationTag.png')} style={styles.interestTag}/> : null}
          {this.state.children === "true" ? <Image source={require('../images/interestTags/childrenTag.png')} style={styles.interestTag}/> : null}
          {this.state.travel === "true" ? <Image source={require('../images/interestTags/travelTag.png')} style={styles.interestTag}/> : null}
          {this.state.volunteer === "true" ? <Image source={require('../images/interestTags/volunteerTag.png')} style={styles.interestTag}/> : null}
          {this.state.art === "true" ? <Image source={require('../images/interestTags/artTag.png')} style={styles.interestTag}/> : null}
          {this.state.tech === "true" ? <Image source={require('../images/interestTags/techTag.png')} style={styles.interestTag}/> : null}
          {this.state.drink === "true" ? <Image source={require('../images/interestTags/drinkTag.png')} style={styles.interestTag}/> : null}
        </View>
        </View>
        </View>
       
        
      <TouchableOpacity onPress={() => this.sendToConfirm()} >
          <Text style={styles.continue} >Continue</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
    );
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
    headerLeft: 
       <TouchableOpacity onPress={() => {navigation.navigate('PickEventPhoto',{...this.state})} } > 
        <Image style={styles.headerLeft} source={require('../images/back.png')} />
      </TouchableOpacity>,
       
  });
}

export default EventEditPreviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30, 
    bottom: 0, 
    width: screenWidth,
    alignItems: 'center',
  },
  textInputContainer: {
    paddingTop: 0,
    bottom: 30
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
  textInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6D7D9',
    height: 45,
    borderRadius: 7,
    marginTop: 10,
    width: screenWidthInterestRow,
  },
 
  ImageStyle: {
    padding: 10,
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
    top: 0
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

  },
})