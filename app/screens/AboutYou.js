import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class AboutYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutOne: '',
      aboutTwo: '',
      aboutThree: '',
      aboutFour: '',
    };
  }

  addAboutMe = async () => {
    console.log('aboutOne: ', aboutOne)
    console.log('aboutTwo: ', aboutTwo)
    console.log('aboutThree: ', aboutThree)
    console.log('aboutFour: ', aboutFour)

  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <TextInput 
          multiline={true}
          numberOfLines={4}
          style={styles.textInputbox}
          defaultValue={'Why did you join bumble bff? \n '}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutOne': text})}
          />
        <TextInput style={styles.textInputbox}
          multiline={true}
          numberOfLines={4}
          defaultValue={"We'll get along if ... \n"}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutTwo': text})}
          />
        <TextInput style={styles.textInputbox}
          multiline={true}
          numberOfLines={4}
          defaultValue={"My super-power would be... \n"}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutThree': text})}
        />
        <TextInput style={styles.textInputbox}
          multiline={true}
          numberOfLines={4}
          defaultValue= {"Three things to make a good friendship are... \n"}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutFour': text})}
        />

        <TouchableOpacity 
          onPress={() => navigate('ProfileComplete', {screen: 'ProfileCompleteScreen'}) }>

            {/* // onPress={() => this.addAboutMe()} */}
        <Text style={styles.continue} >Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AboutYou;

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
  textInputbox: {
    color: '#5B616B',
    backgroundColor: '#D6D7D9',
    width: '80%',
    height: '17%',
    paddingTop: '3%',
    paddingLeft: '4%',
    paddingRight: '5%',
    marginTop: '5%',
    borderRadius: 25,
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
    bottom: -25,
  },
})