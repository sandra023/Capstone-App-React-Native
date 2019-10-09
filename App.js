import React from 'react';
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './app/screens/Login'
import RegisterScreen from './app/screens/Register'
import EventMessagesIndexScreen from './app/screens/EventMessagesIndex'
import EventsScreen from './app/screens/Events'
import ProfileCompleteScreen from './app/screens/ProfileComplete'
import UploadPhotosOfYourselfScreen from './app/screens/UploadPhotosOfYourself'
import { LinearGradient } from 'expo-linear-gradient';
import Logo from './app/components/Logo';
import {Dimensions } from "react-native";
import InterestedInScreen from './app/screens/InterestedIn';
import AboutYouScreen from './app/screens/AboutYou'
import EditProfileScreen from './app/screens/EditProfile';
import ProfileLandingPageScreen from './app/screens/ProfileLandingPage'
import NewEventInterestedInScreen from './app/screens/NewEventInterestedIn'
import AddEventDetailsScreen from './app/screens/AddEventDetails'
import PickEventPhotoScreen from './app/screens/PickEventPhoto';
import EventEditPreviewScreen from './app/screens/EventEditPreview';
import EventPreviewScreen from './app/screens/EventPreview';
import AccountPageScreen from './app/screens/AccountPage'
import EventMessagesScreen from './app/screens/EventMessages'
import FinishedEditProfileScreen from './app/screens/FinishedEditProfile'
import EventCreatedScreen from './app/screens/EventCreated'
import EventOnboardingScreen from './app/screens/EventOnboarding'
import YouAreAttendingScreen from './app/screens/YouAreAttending'

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const logoHeight = .5*(Math.round(Dimensions.get('window').height));


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
            <Logo style={styles.logo}/>
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
            resizeMode: 'contain',
            width: screenWidth
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
    AccountPage: {
      screen: AccountPageScreen,
      navigationOptions: {
        title: 'AccountPage',
        // headerLeft: null,
        headerTitle:
        <Image  
        source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: {
        title: 'Events',
        headerTitle:
        <Image  
        source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    },
    EditProfile: {
      screen: EditProfileScreen,
      navigationOptions: {
        title: 'EditProfile',
        headerTitle:
        <Image  
        source={require('./app/images/bff.png')}/>,
        headerStyle: {
          resizeMode: 'contain'
        }
      }
    },
    ProfileLandingPage: {
      screen: ProfileLandingPageScreen,
      navigationOptions: {
        title: 'ProfileLandingPage',
        headerTitle:
        <Image  
        source={require('./app/images/bff.png')}/>,
        headerStyle: {
          resizeMode: 'contain'
        }
      }
    },
    NewEventInterestedIn: {
      screen: NewEventInterestedInScreen,
      navigationOptions: {
        gesturesEnabled: false,
        title: 'NewEventInterestedIn',
        headerTitle:
        <Image
        source={require('./app/images/bff.png')}/>,
        headerStyle: {
          resizeMode: 'contain'
      }
    }
  },
  AddEventDetails: {
    screen: AddEventDetailsScreen,
    navigationOptions: {
      title: 'AddEventDetails',
      headerTitle:
      <Image 
      source={require('./app/images/bff.png')}/>,
      headerStyle: {
        resizeMode: 'contain'
      }
    }
  },
  PickEventPhoto: {
    screen: PickEventPhotoScreen,
    navigationOptions: {
      title: 'PickEventPhoto',
      headerTitle:
      <Image 
      source={require('./app/images/bff.png')}/>,
      headerStyle: {
        resizeMode: 'contain'
      }
    }
  },
  EventEditPreview: {
    screen: EventEditPreviewScreen,
    navigationOptions: {
      title: 'EventEditPreview',
      headerTitle: 
      <Image
      source= {require('./app/images/bff.png')}/>,
      headerStyle: {
        resizeMode: 'contain'
      }
    }
  },
  EventPreview: {
    screen: EventPreviewScreen,
    navigationOptions: {
      title: 'EventPreview',
      headerTitle: 
      <Image 
      source= {require('./app/images/bff.png')}/>,
      headerStyle: {
        resizeMode: 'contain'
      }
    }
  },
  EventCreated: {
    screen: EventCreatedScreen,
    headerMode: 'none',
    navigationOptions: {
      title: 'EventCreated',
      header: null,
      // headerLeft: null,
      gesturesEnabled: false,
    }
  },
  YouAreAttending: {
    screen: YouAreAttendingScreen,
    navigationOptions: {
      title: 'YouAreAttending',
      // headerLeft: null,
      gesturesEnabled: false,
      header: null,
    }
  },
  },
  
  {
    initialRouteName: 'Events'
  }
)

// const createEvent = createStackNavigator ({
  // NewEventInterestedIn: {
  //   screen: NewEventInterestedInScreen,
  //   navigationOptions: {
  //     title: 'NewEventInterestedIn',
  //     headerTitle:
  //     <Image
  //     source={require('./app/images/bff.png')}/>,
  //     headerStyle: {
  //       resizeMode: 'contain'
  //     }
  //   }
  // },
  // AddEventDetails: {
  //   screen: AddEventDetailsScreen,
  //   navigationOptions: {
  //     title: 'AddEventDetails',
  //     headerTitle:
  //     <Image 
  //     source={require('./app/images/bff.png')}/>,
  //     headerStyle: {
  //       resizeMode: 'contain'
  //     }
  //   }
  // },
  // PickEventPhoto: {
  //   screen: PickEventPhotoScreen,
  //   navigationOptions: {
  //     title: 'PickEventPhoto',
  //     headerTitle:
  //     <Image 
  //     source={require('./app/images/bff.png')}/>,
  //     headerStyle: {
  //       resizeMode: 'contain'
  //     }
  //   }
  // },
  // EventEditPreview: {
  //   screen: EventEditPreviewScreen,
  //   navigationOptions: {
  //     title: 'EventEditPreview',
  //     headerTitle: 
  //     <Image
  //     source= {require('./app/images/bff.png')}/>,
  //     headerStyle: {
  //       resizeMode: 'contain'
  //     }
  //   }
  // },
  // EventPreview: {
  //   screen: EventPreviewScreen,
  //   navigationOptions: {
  //     title: 'EventPreview',
  //     headerTitle: 
  //     <Image 
  //     source= {require('./app/images/bff.png')}/>,
  //     headerStyle: {
  //       resizeMode: 'contain'
  //     }
  //   }
  // },
  // EventCreated: {
  //   screen: EventCreatedScreen,
  //   navigationOptions: {
  //     title: 'EventCreated',
  //     headerLeft: null,
  //     headerTitle: 
  //     <Image 
  //     source= {require('./app/images/bff.png')}/>,
  //     headerStyle: {
  //       resizeMode: 'contain'
  //     }
  //   }
  // },
//  },
//  {
//   initialRouteName: 'NewEventInterestedIn'
//  }
// )

const EditProfileStack = createStackNavigator (
  {
    InterestedIn: { 
      screen: InterestedInScreen,
      navigationOptions: {
        title: "InterestedIn",
        headerLeft: null,
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    },
    UploadPhotosOfYourself: {
      screen: UploadPhotosOfYourselfScreen,
      navigationOptions: {
        title: "UploadPhotosOfYourself",
        headerLeft: null,
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
    }
  },
    AboutYou: {
      screen: AboutYouScreen,
      navigationOptions: {
        title: "AboutYou",
        headerLeft: null,
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
  },
    ProfileComplete: {
      screen: ProfileCompleteScreen,
      navigationOptions: {
        title: "ProfileComplete",
        gesturesEnabled: false,
        headerLeft: null,
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>,
        headerStyle: {
            resizeMode: 'contain'
        }
      }
    },
    EventOnboarding: {
      screen: EventOnboardingScreen,
      navigationOptions: {
        title: "EventOnboarding",
        gesturesEnabled: false,
        headerTitle:
        <Image source={require('./app/images/bff.png')}/>,
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
  },
  // createEventStack: {
  //   screen: createEvent
  // }
})


export default createAppContainer(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // logo: {
  //   top: logoHeight
  // },
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
