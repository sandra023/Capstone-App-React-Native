import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class AboutYou extends Component {
  constructor(props) {
    super(props);
    const {params} = props.navigation.state
    this.state = {
      currentUser: params.currentUser,
      // aboutOne: '',
      // aboutTwo: '',
      // aboutThree: '',
      // aboutFour: '',
    };
  }

  addAboutMe = async () => {
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
          console.log("Successfuly added About Me")
          console.log("after register currentUser: ", await this.state.currentUser)
          this.props.navigation.navigate('ProfileComplete',{currentUser: this.state.currentUser});
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
    this.setState({
        currentUser: {...this.state.currentUser,
        aboutOne: this.state.aboutOne,
        aboutTwo: this.state.aboutTwo,
        aboutThree: this.state.aboutThree,
        aboutFour: this.state.aboutFour
        }
    })
    console.log("Handle Form Change Hit, currentUser", this.state.currentUser)
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1}}>
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
          defaultValue={"My super-power would be ... \n"}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutThree': text})}
        />
        <TextInput style={styles.textInputbox}
          multiline={true}
          numberOfLines={4}
          defaultValue= {"Three things to make a good friendship are ... \n"}
          placeholderTextColor= '#5B616B'
          onChangeText={(text) => this.setState({'aboutFour': text})}
        />

        <TouchableOpacity 
          onPress={() => this.addAboutMe() }>
          <Text style={styles.continue} >Continue</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
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