import React, {Component} from 'react'
import { 
  View, 
  Text,
} from 'react-native';


 export default class EventMessagesIndexScreen extends Component {
  constructor(props){
    super(props);
    // const {params} = props.navigation.state
    this.state = {
      // currentUser: params.currentUser
    }
  }

  render(){
    return(
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}

