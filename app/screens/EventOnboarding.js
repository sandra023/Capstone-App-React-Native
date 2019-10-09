import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenHeightCards = .2*(Math.round(Dimensions.get('window').height));
const screenHeight = .2*(Math.round(Dimensions.get('window').height));
const screenWidthCardText = .9*(Math.round(Dimensions.get('window').width));
const screenWidth = .5*(Math.round(Dimensions.get('window').width));
const screenWidthButton = .8*(Math.round(Dimensions.get('window').width));
const windowScreenHeight = .2*(Math.round(Dimensions.get('window').height));

class EventOnboardingScreen extends Component {

  constructor(props){
      super(props);
      // const {params} = props.navigation.state
      this.state = {
          // currentUser: params.currentUser,
      }
  }

  render(){
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const {state} = this.props.navigation;
    console.log('this.state from EventCreatedScreen: ',this.state)

    return(
        <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>
            <View style={styles.container}>
                <View style={styles.rowOne}>
                  <Image 
                    source={require('../images/leftArrow.png')}
                    style={styles.leftArrow}
                  />
                    <Text style={styles.yourProfile}>{'Your Profile & \n Create Events'}</Text>
                    <Image 
                    source={require('../images/rightUpArrow.png')}
                    style={styles.rightArrow}
                  />
                </View>
                <View style={styles.rowTwo}>
                  {/* <Image 
                    source={require('../images/rightUpArrow.png')}
                    style={styles.rightArrow}
                  /> */}
                    <Text style={styles.eventGroupChat}>{'Event Group Chats'}</Text>
                  
                </View>
                <View style={styles.rowThree}>
                  <Image 
                    source={require('../images/leftCard.png')}
                    style={styles.leftCard}/>
                  <Image 
                    source={require('../images/rightCard.png')}
                    style={styles.rightCard}/>
                </View>
                <View style={styles.rowFour}>
                  <Text style={styles.leftCardText}>{'Swipe left to \n discard \n event'}</Text>
                  <Text style={styles.rightCardText}>{'Swipe right to \n discard \n event'}</Text>
                </View>
                
                <View style={styles.columnOne}>
                  <Text style={styles.scrollDownText}>{"scoll for more \n event info"}</Text>
                  <Image
                    source={require('../images/angle-down.png')}
                    style={styles.downArrow}/>
                </View>
              
                <TouchableOpacity style={styles.findEvents}
                    onPress={() => navigate('Events', {currentUser: navigation.state.params.currentUser })}
                    >
                    <Text 
                        style={styles.findEventsButton}
                        color="#009BBE"
                        >Start Finding Events
                    </Text>
                </TouchableOpacity >
            </View>
        </LinearGradient>
    )
    }
    static navigationOptions = ({navigation}) => ({
      title: 'Events',
      headerLeft: 
        // <TouchableOpacity onPress={() => {navigation.navigate('ProfileLandingPage',{currentUser: this.state.currentUser})} } >
          <Image style={styles.headerLeft} source={require('../images/user-circle.png')} />,
        // {/* </TouchableOpacity>, */}
      headerRight: 
      // <TouchableOpacity onPress={() => {navigation.navigate('Profile',{...this.state})} } >
      // <TouchableOpacity onPress={() => {navigation.navigate()} } >
          <Image style={styles.headerRight} source={require('../images/messages.png')} />
        // </TouchableOpacity>           
    });
}
export default EventOnboardingScreen;

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      bottom: 0, 
      left: 0, 
      right: 0,
      top: 30,
      height: windowScreenHeight
    },  
    headerRight:{
      height: 40,
      width: 40,
      marginTop: 55,
      marginRight: 10,
    },
    headerLeft:{
      height: 35,
      width: 35,
      marginTop: 50,
      marginLeft: 8
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
    },
  findEventsButton:{
    top: 65,
    backgroundColor: '#FFC629',
    borderRadius: 28,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: '89%',
    position: 'absolute',
    // bottom: 0,
    marginBottom: 10,
    shadowColor: "#002F56",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    },
    contentContainer:{
      paddingTop: 30,
      alignItems: 'center',
      flex: 1,
    },
    bottomView: {
        bottom:-185
    },
    findEvents: {
      top: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowOne:{
      flexDirection: 'row',
      width: '100%',
      height: 50,
      alignSelf: 'flex-start',
      justifyContent: 'flex-start'
    },
    rowTwo:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: screenWidth
    },
    rowThree:{
      top: 90,
      flexDirection: 'row',
      width: screenWidth,
      justifyContent: 'space-around'
    },
    rowFour:{
      top: 90,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: screenWidthCardText,
    },
    rightArrow:{
      left: 80,
      height: 120,
      resizeMode: 'contain',
      width: 70
    },
    leftArrow: {
      height: 50,
      resizeMode: 'contain',
      width: 50
    },
    yourProfile: {
      top: 23,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',

    },
    eventGroupChat: {
      fontSize: 20,
      fontWeight: 'bold',
      top: 50,
      left: 5
    },
    rightCard:{
      // paddingLeft: 30,
      left: 20,
      height: screenHeight,
      resizeMode: 'center',
    },
    leftCard: {
      // paddingRight: 30,
      right: 40,
      height: screenHeight,
      resizeMode: 'center',
    },
    rightCardText:{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'right',
      alignContent: 'flex-end',
      alignSelf: 'flex-end',
      alignItems: 'flex-end'
    },
    leftCardText:{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left'
    }, 
    columnOne:{
      top: 120,
      flexDirection: 'column',
      alignItems: 'center',
    },
    scrollDownText:{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    downArrow:{
      width: 33,
      height: 22,
      resizeMode: 'contain'
    }


})