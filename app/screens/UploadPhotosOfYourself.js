import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import * as React from 'react';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


export default class UploadPhotosOfYourselfScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageOne: null,
      imageTwo: null,
      imageThree: null,
      imageFour: null,
      imageFive: null,
      imageSix: null
    };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
          <Image 
              source={require('../images/UploadPhotosOfYourself.png')}
              style={styles.yourself}
            />
            <Image 
              source={require('../images/proTip.png')}
              style={styles.proTip}
            />

      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/prePhotoIcon.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
            require('../images/prePhotoIcon.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
            require('../images/prePhotoIcon.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/prePhotoIcon.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
            require('../images/prePhotoIcon.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
            require('../images/prePhotoIcon.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => navigate('AboutYou', {screen: 'AboutYouScreen'}) }>
        {/* onPress={() =>  */}
        {/* navigate('AboutYou', 
        {screen: 'AboutYou'}) }> */}
      <Text style={styles.continue} >Continue</Text>
      </TouchableOpacity>

      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
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
yourself: {
  top: "2%",
  width: '65%',
  resizeMode: 'contain'
},
proTip: {
  width: '85%',
  resizeMode: 'contain'
},
rowContainer: {
  width: "90%",
  flexDirection: 'row'
},
touchableOpacity: {
  alignSelf: 'center',
  margin: '1.5%',  
  marginBottom: 0,
  // width: "70%",
  paddingBottom: '3%'
},
icon: {
  top: "4%",
  width: 85,
  height: 85,
  // left: 0,
  borderRadius: 42.5,
  marginLeft: "3.5%",
  marginRight: "3.5%",
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
  width: 315,
  bottom: -55,
},
})
