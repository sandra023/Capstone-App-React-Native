import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class InterestedInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    const{navigation}=this.props
    console.log('navigation',navigation)
    console.log('navigate',navigate)
    // console.log("this.prps.nav.stat.params",this.props.navigation.state.params)
    const {state} = this.props.navigation;
    console.log('state',state)
    // console.log("state.params",state.params)
    console.log("state.params.currentUser", state.params.currentUser)

    return (
      <View style={styles.container}>
      <Image 
        source={
            require('../images/InterestedIn.png')
        }
        style={styles.InterestedIn}    
      />
      
      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
      <ImageBackground 
        source={
            require('../images/transparentIcons/education.png')
        }
        resizeMode="contain"
        style={styles.icon}    
      />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
      <Image 
        source={
            require('../images/transparentIcons/health.png')
        }
        style={styles.icon}    
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
      <Image 
        source={
            require('../images/transparentIcons/sports.png')
        }
        style={styles.icon}    
      />
      </TouchableOpacity>

      </View>
      <View style={styles.wordRowContainer}>
      <Text style={styles.word}>Education</Text>
      <Text style={styles.word}>Health</Text>
      <Text style={styles.word}>Sports</Text>
      </View>


      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/transparentIcons/events.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/transparentIcons/food.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/transparentIcons/meditation.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>
      </View>
      <View style={styles.wordRowContainer}>
      <Text style={styles.word}>Events</Text>
      <Text style={styles.word}>Food</Text>
      <Text style={styles.word}>Meditation</Text>
      </View>



      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/transparentIcons/children.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>
      
      
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
      <Image 
        source={
            require('../images/transparentIcons/travel.png')
        }
        style={styles.icon}    
      />   
      </TouchableOpacity>   
      
      
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
      <Image 
        source={
            require('../images/transparentIcons/volunteer.png')
        }
        style={styles.icon}    
      />
      </TouchableOpacity>

      </View>
      <View style={styles.wordRowContainer}>
      <Text style={styles.word}>Children</Text>
      <Text style={styles.word}>Travel</Text>
      <Text style={styles.word}>Volunteer</Text>
      </View>




      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/transparentIcons/art.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/transparentIcons/tech.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        alert('You tapped the button!');
        }}style={styles.touchableOpacity}>
        <Image 
          source={
              require('../images/transparentIcons/drink.png')
          }
          style={styles.icon}    
        />
      </TouchableOpacity>
      </View>
      <View style={styles.wordRowContainer}>
      <Text style={styles.word}>Art</Text>
      <Text style={styles.word}>Tech</Text>
      <Text style={styles.word}>Drinks</Text>
      </View>
      {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('UploadPhotosOfYourself', {screen: 'UploadPhotosOfYourselfScreen'}) }> */}
      <TouchableOpacity onPress={() => navigate('UploadPhotosOfYourself', {screen: 'UploadPhotosOfYourselfScreen'}) }>
      {/* <TouchableOpacity onPress={() => navigate('UploadPhotosOfYourself')}> */}
      {/* <TouchableOpacity onPress = {() => alert('This is a button!')}> */}

      {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('UploadPhotosOfYourself') }> */}
      <Text style={styles.continue} >Continue</Text>
      </TouchableOpacity>
      </View>
      

    );
  }
}

export default InterestedInScreen;

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
InterestedIn: {
  top: "1%",
  marginBottom: '2%',
  width: '75%',
  resizeMode: 'contain'
},
rowContainer: {
  width: "95%",
  flexDirection: 'row'
},
touchableOpacity: {
  alignSelf: 'center',
  margin: '1.5%',  
  marginBottom: 0,
  width: "70%",
  paddingBottom: '3%',
},
wordRowContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  top: ".5%",
},
icon: {
  top: "4%",
  width: 85,
  height: 85,
  left: 0,
  marginLeft: "3.5%",
  marginRight: "3.5%",
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
  bottom: 10,
  margin: 8,
  top:'2%'
},
word: {
  textAlign: 'center',
  width: 85,
  marginBottom: "2%",
  marginLeft: "2.2%",
  marginRight: "2.2%",
}
})
