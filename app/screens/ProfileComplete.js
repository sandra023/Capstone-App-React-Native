import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>
        <View style={styles.viewcontainer}>
        <Text style={styles.text}>Your profile is complete!</Text>
        <Image 
          source={
            require('../images/threelogo.png')
          }
          style={styles.logo}   
        />     
        <TouchableOpacity 
          onPress={() => 
          navigate('ProfileComplete', 
          {screen: 'ProfileCompleteScreen'}) }>
          <Text style={styles.continue} >Start finding events now!</Text>
        </TouchableOpacity>
    
        </View>
        </LinearGradient>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute', 
    top: 30, 
    bottom: 0, 
    left: 0, 
    right: 0,
  },
  viewcontainer: {
    alignItems: 'center',
    flex: 1,
    top: 0, 
    bottom: 0,
    left: 0, 
    right: 0,
  },
  text: {
    top: '15%',
    left: 0, 
    right: 0,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  logo: {
    top: '27%',
    width: 175,
    height: 175,
  
  },
  touchableOpacity: {
    alignSelf: 'center',
    margin: '1.5%',  
    marginBottom: 0,
    // width: "70%",
    paddingBottom: '3%'
  },
  continue:{
    backgroundColor: '#019BBE',
    borderRadius: 25,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: 315,
    bottom: -300,
  },
})