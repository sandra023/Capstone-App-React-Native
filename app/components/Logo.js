import React, {Component} from 'react';
import {
    Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default class Logo extends Component {
    render(){
        return(
            <View style={styles.logoContainer}>
                {/* <Image 
                    source={
                        require('../images/bumblebffevents.png')
                    }
                    style={styles.eventsWords}    
                /> */}
                <Text style={styles.text}>{'Make new friends \n doing what you love'}</Text>
                <Image 
                    source={
                        require('../images/threelogo.png')
                    }
                    style={styles.logo}   
                /> 
          </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginTop: '8%',
        marginBottom: '-15%',
        textAlign: 'center',
        color: "#019bbe",
        // height: '60%'
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    logo: {
        top: '50%',
        width: 175,
        height: 175,
      
      },
    eventsWords:{
        resizeMode: 'contain',
        top: '20%',
        width: 250
    },
})