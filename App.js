// import React from 'react';
// import { 
//   View, 
//   Style,
//   Image, 
//   Text, 
//   StyleSheet, 
//   ScrollView,
//   TouchableHighlight
// } from 'react-native';
// import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';
// import LoginScreen from './app/screens/Login'
// import RegisterScreen from './app/screens/Register'
// import ProfileScreen from './app/screens/Profile'
// import EventsScreen from './app/screens/Events'
// import ProfileCompleteScreen from './app/screens/ProfileComplete'
// import UploadPhotosOfYourselfScreen from './app/screens/UploadPhotosOfYourself'
// import { LinearGradient } from 'expo-linear-gradient';
// import Logo from './app/components/Logo';
// import {Dimensions } from "react-native";
// import InterestedInScreen from './app/screens/InterestedIn';
// import AboutYouScreen from './app/screens/AboutYou'

// const screenHeight = Math.round(Dimensions.get('window').height);
// const screenWidth = Math.round(Dimensions.get('window').width);


// class HomeScreen extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loggedIn: false
//     }
//   }


//   handleLogin = () =>
//   {
//     this.setState(
//       {
//         loggedIn: true
//       });
//   }

//   render() {
//     console.log('app.js')
//     const {navigate} = this.props.navigation;

//     return (
//       <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>
//       <View style={styles.container}>
//         <ScrollView
//           // style={styles.container}
//           contentContainerStyle={styles.contentContainer}>
  
//           <View style={styles.welcomeContainer}>
//             {/* <Text style={styles.logoSentance}>Make new friends doing what you love with</Text> */}
//             <Logo/>
//           </View>

//           <Text style={styles.loginButton} onPress={() => navigate('Login', {screen: 'Login'}) }>Log In</Text>
//           <Text style={styles.createProfile} onPress={() => navigate('Register', {screen: 'Register'}) }>Create Profile</Text>
//         </ScrollView>
//       </View>
//       </LinearGradient>
      
//     );
//   }
// }

// const AppStack = createStackNavigator(
//   { 
//     Home: { 
//       screen: HomeScreen,
//       navigationOptions: {
//         title: "Splash",
//         headerTitle:
//         <Image source={require('./app/images/bff.png')}/>,
//         headerStyle: {
//             resizeMode: 'contain'
//         }
//       }
//     },
//     Register: { 
//       screen: RegisterScreen,
//       navigationOptions: {
//         title: "Register",
//         headerLeft: null,
//         headerTitle:
//         <Image source={require('./app/images/bff.png')}/>,
//         headerStyle: {
//             resizeMode: 'contain'
//         }
//       } 
//     },
//     Login: { 
//       screen: LoginScreen,
//       navigationOptions: {
//         title: "Login",
//         headerLeft: null,
//         headerTitle:
//         <Image source={require('./app/images/bff.png')}/>,
//         headerStyle: {
//             resizeMode: 'contain'
//         }
//       } 
//     },
//     InterestedIn: { 
//       screen: InterestedInScreen,
//       navigationOptions: {
//         title: "InterestedIn",
//         headerLeft: null,
       
//         // headerLeft:               
//         //  <Image style={{height: 55, width: 55}} source={require('./app/images/account.png')} />,
//         headerTitle:
//           <Image source={require('./app/images/bff.png')}/>,
//         headerStyle: {
//           resizeMode: 'contain'
//         }
//       }
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         title: 'Profile',
//         headerLeft: null,
//         headerTitle:
//         <Image source={require('./app/images/bff.png')}/>,
//         headerStyle: {
//             resizeMode: 'contain'
//         }
//       }
//     },
//     AboutYou: {
//       screen: AboutYouScreen,
//       navigationOptions: {
//         title: "AboutYou",
//         headerLeft: null,
//         headerTitle:
//         <Image source={require('./app/images/bff.png')}/>
//         ,
//         headerStyle: {
//             resizeMode: 'contain'
//         }
//       }
//     },
//     UploadPhotosOfYourself: {
//       screen: UploadPhotosOfYourselfScreen,
//       navigationOptions: {
//         title: "UploadPhotosOfYourself",
//         headerLeft: null,
//         headerTitle:
//         <Image source={require('./app/images/bff.png')}/>,
//         headerStyle: {
//             resizeMode: 'contain'
//         }
//       }
//     },
//     Events: {
//       screen: EventsScreen,
//       navigationOptions: {
//         title: 'Profile',
//         headerLeft: null,
//         headerTitle:
//         <Image  
//         source={require('./app/images/bff.png')}
//         />
//         ,
//         headerStyle: {
//             resizeMode: 'contain'
//         }
//       }
//     },
//     ProfileComplete: {
//         screen: ProfileCompleteScreen,
//         navigationOptions: {
//           title: "ProfileComplete",
//           headerLeft: null,
//           headerTitle:
//           <Image source={require('./app/images/bff.png')}/>
//           ,
//           headerStyle: {
//               resizeMode: 'contain'
//           }
//         }
//       }
//     },  
//   {
//   initialRouteName: 'Events'
//   }
// );

// // const AuthStack = createStackNavigator(
// //   {
// //     Profile: {
// //       screen: ProfileScreen,
// //       navigationOptions: {
// //         title: 'Profile',
// //         headerLeft: null,
// //         headerTitle:
// //         <Image  
// //         source={require('./app/images/bff.png')}
// //         />
// //         ,
// //         headerStyle: {
// //             resizeMode: 'contain'
// //         }
// //       }
// //     },
// //     Events: {
// //       screen: EventsScreen,
// //       navigationOptions: {
// //         title: 'Profile',
// //         headerLeft: null,
// //         headerTitle:
// //         <Image  
// //         source={require('./app/images/bff.png')}
// //         />
// //         ,
// //         headerStyle: {
// //             resizeMode: 'contain'
// //         }
// //       }
// //     },
    
// //   },
// //   {
// //     initialRouteName: 'Events'
// //   }
// // )

// // const CreateProfileStack = createStackNavigator (
// //   {
// //     Interestedin: { 
// //       screen: InterestedinScreen,
// //       navigationOptions: {
// //         title: "InterestedIn",
// //         headerTitle:
// //         <Image source={require('./app/images/bff.png')}/>
// //         ,
// //         headerStyle: {
// //             resizeMode: 'contain'
// //         }
// //       }
// //     }
// //   },
// //   {
// //     UploadPhotosOfYourself: {
// //       screen: UploadPhotosOfYourselfScreen,
// //       navigationOptions: {
// //         title: "UploadPhotosOfYourself",
// //         headerTitle:
// //         <Image source={require('./app/images/bff.png')}/>
// //         ,
// //         headerStyle: {
// //             resizeMode: 'contain'
// //         }
// //       }
// //     }
// //   },
// //   {
// //     AboutYou: {
// //       screen: AboutYouScreen,
// //       navigationOptions: {
// //         title: "AboutYou",
// //         headerTitle:
// //         <Image source={require('./app/images/bff.png')}/>
// //         ,
// //         headerStyle: {
// //             resizeMode: 'contain'
// //         }
// //       }
// //     }
// //   },
// //   {
// //     ProfileComplete: {
// //       screen: ProfileCompleteScreen,
// //       navigationOptions: {
// //         title: "ProfileComplete",
// //         headerTitle:
// //         <Image source={require('./app/images/bff.png')}/>
// //         ,
// //         headerStyle: {
// //             resizeMode: 'contain'
// //         }
// //       }
// //     }
// //   },
// //   {
// //     CreateEventOnboarding: {
// //       screen: CreateEventOnboardingScreen,
// //       navigationOptions: {
// //         title: "CreateEventOnboarding",
// //         headerTitle:
// //         <Image source={require('./app/images/bff.png')}/>
// //         ,
// //         headerStyle: {
// //             resizeMode: 'contain'
// //         }
// //       }
// //     }
// //   }
// // )


// export default createAppContainer(AppStack);


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   linearGradient: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   loginButton:{
//     backgroundColor: '#002F56',
//     borderRadius: 28,
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     overflow: 'hidden',
//     padding: 12,
//     textAlign:'center',
//     width: '89%',
//     position: 'absolute',
//     bottom: 68,
//     margin: 8
//   },
//   headerLeftPic: {
//     height: '2%',
//     width: '2%'
//   },
//   createProfile: {
//     backgroundColor: '#009BBE',
//     borderRadius: 28,
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     overflow: 'hidden',
//     padding: 12,
//     textAlign:'center',
//     width: '89%',
//     position: 'absolute',
//     bottom: 12
//   },
//   contentContainer: {
//     paddingTop: 30,
//     alignItems: 'center',
//     flex: 1
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
// });





import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './app/screens/Login'
import RegisterScreen from './app/screens/Register'
import ProfileScreen from './app/screens/Profile'
import EventsScreen from './app/screens/Events'
import ProfileCompleteScreen from './app/screens/ProfileComplete'
import UploadPhotosOfYourselfScreen from './app/screens/UploadPhotosOfYourself'
import { LinearGradient } from 'expo-linear-gradient';
import Logo from './app/components/Logo';
import {Dimensions } from "react-native";
import InterestedInScreen from './app/screens/InterestedIn';
import AboutYouScreen from './app/screens/AboutYou'

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);


class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn: false
    }
  }


  handleLogin = () =>
  {
    this.setState(
      {
        loggedIn: true
      });
  }

  render() {
    console.log('app.js')
    const {navigate} = this.props.navigation;

    return (
      <LinearGradient colors={['#9acbeb', '#edf1fa', '#9acbeb']} style={styles.linearGradient}>  
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}>
  
          <View style={styles.welcomeContainer}>
            <Logo/>
          </View>

          <Text style={styles.loginButton} onPress={() => navigate('Login', {screen: 'Login'}) }>Log In</Text>
          <Text style={styles.createProfile} onPress={() => navigate('Register', {screen: 'Register'}) }>Create Profile</Text>
        </ScrollView>
      </View>
      </LinearGradient>
    );
  }
}

const AuthStack = createStackNavigator(
  { 
    Home: { 
      screen: HomeScreen,
      navigationOptions: {
        title: "Splash",
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    },
    Register: { 
      screen: RegisterScreen,
      navigationOptions: {
        title: "Register",
        headerLeft: null,
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
      } 
    },
    Login: { 
      screen: LoginScreen,
      navigationOptions: {
        title: "Login",
        headerLeft: null,
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
      } 
    }
  },  
  {
  initialRouteName: 'Home'
  }
);

const MainTabs = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        headerLeft: null,
        // tabBarVisible: false,
        headerTitle:
        <Image  
        source={require('./app/images/bff.png')}
        />
        ,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: {
        title: 'Events',
        // headerLeft: null,
        headerLeft:               
         <Image style={{height: 40, width: 40}} source={require('./app/images/account.png')} />,
        // tabBarVisible: false,
        headerTitle:
        <Image  
        source={require('./app/images/bff.png')}
        />
        ,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    },
  },
  {
    initialRouteName: 'Events'
  }
)

const EditProfileStack = createStackNavigator (
  {
    InterestedIn: { 
      screen: InterestedInScreen,
      navigationOptions: {
        title: "InterestedIn",
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>
        ,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    },
    UploadPhotosOfYourself: {
      screen: UploadPhotosOfYourselfScreen,
      navigationOptions: {
        title: "UploadPhotosOfYourself",
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>
        ,
        headerStyle: {
            resizeMode: 'contain'
        }
    }
  },
    AboutYou: {
      screen: AboutYouScreen,
      navigationOptions: {
        title: "AboutYou",
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>
        ,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
  },
    ProfileComplete: {
      screen: ProfileCompleteScreen,
      navigationOptions: {
        title: "ProfileComplete",
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>
        ,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    }
  },
  {
    initialRouteName: 'InterestedIn'
  }
  // {
  //   CreateEventOnboarding: {
  //     screen: CreateEventOnboardingScreen,
  //     navigationOptions: {
  //       title: "CreateEventOnboarding",
  //       headerTitle:
  //       <Image source={require('./app/images/bff.png')}/>
  //       ,
  //       headerStyle: {
  //           resizeMode: 'contain'
  //       }
  //     }
  //   }
  // }
)

const App = createSwitchNavigator({
  Auth: {
    screen: AuthStack
  },
  MainApp: {
    screen: MainTabs
  },
  EditProfileStack:{
    screen: EditProfileStack
  }
})


export default createAppContainer(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  loginButton:{
    backgroundColor: '#002F56',
    borderRadius: 28,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: '89%',
    position: 'absolute',
    bottom: 68,
    margin: 8
  },
  createProfile: {
    backgroundColor: '#009BBE',
    borderRadius: 28,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: '89%',
    position: 'absolute',
    bottom: 12
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
    flex: 1
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
