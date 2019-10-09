import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 

class NewEventInterestedInScreen extends Component {
  constructor(props) {
    super(props);
    const {params} = props.navigation.state

    this.state = {
      currentUser: params.currentUser,
      art: false,
      children: false,
      drink: false,
      education: false,
      events: false,
      food: false,
      outdoors: false,
      wellness: false,
      sports: false,
      tech: false,
      travel: false,
      volunteer: false,
 
    };
  }

  handleClickedInterests = () => {
    this.setState({
      currentUser: this.state.currentUser,
      eventInterests: {
        education: this.state.education,
        outddors: this.state.outdoors,
        sports: this.state.sports,
        events: this.state.events,
        food: this.state.food,
        wellness: this.state.wellness,
        children: this.state.children,
        travel: this.state.travel,
        volunteer: this.state.volunteer,
        art: this.state.art,
        tech: this.state.tech,
        drink: this.state.drink
      }
      })

      this.props.navigation.navigate('AddEventDetails', {...this.state})
  }
  
//   handleClickedInterests = () => {
//     this.setState({
//       currentUser: {...this.state.currentUser,
//         eventInterests: {
//           education: this.state.education,
//           outddors: this.state.outdoors,
//           sports: this.state.sports,
//           events: this.state.events,
//           food: this.state.food,
//           wellness: this.state.wellness,
//           children: this.state.children,
//           travel: this.state.travel,
//           volunteer: this.state.volunteer,
//           art: this.state.art,
//           tech: this.state.tech,
//           drink: this.state.drink
//         }
//       }
//     })
//   }


  render() {
    const {navigate} = this.props.navigation;
    const{navigation}=this.props;
    const {state} = this.props.navigation;
    console.log('this.state from NewEventInterestedInScreen', this.state)
    const education = !this.state.education? require('../images/transparentIcons/education.png') : require('../images/transparentIcons/educationYes.png') //education : educationYes;
    const outdoors = !this.state.outdoors? require('../images/transparentIcons/outdoors.png') : require('../images/transparentIcons/outdoorsYes.png') 
    const sports = !this.state.sports? require('../images/transparentIcons/sports.png') : require('../images/transparentIcons/sportsYes.png') // sports : sportsYes;
    const events = !this.state.events? require('../images/transparentIcons/events.png') : require('../images/transparentIcons/eventsYes.png') // events : eventsYes;
    const food = !this.state.food? require('../images/transparentIcons/food.png') : require('../images/transparentIcons/foodYes.png') // food : foodYes; 
    const wellness = !this.state.wellness? require('../images/transparentIcons/wellness.png') : require('../images/transparentIcons/wellnessYes.png') // wellness : wellnessYes;
    const children = !this.state.children? require('../images/transparentIcons/children.png') : require('../images/transparentIcons/childrenYes.png') // children: childrenYes;
    const travel = !this.state.travel? require('../images/transparentIcons/travel.png') : require('../images/transparentIcons/travelYes.png') // travel: travelYes;
    const volunteer = !this.state.volunteer? require('../images/transparentIcons/volunteer.png') : require('../images/transparentIcons/volunteerYes.png') // volunteer : volunteerYes;
    const art = !this.state.art? require('../images/transparentIcons/art.png') : require('../images/transparentIcons/artYes.png') // art : artYes; 
    const tech = !this.state.tech? require('../images/transparentIcons/tech.png') : require('../images/transparentIcons/techYes.png') // tech : techYes;
    const drink = !this.state.drink? require('../images/transparentIcons/drink.png') : require('../images/transparentIcons/drinkYes.png') // drinks : drinksYes

    return (
      <View style={styles.container}>
      <Image 
        source={
            require('../images/whatCatagories.png')
        }
        style={styles.InterestedIn}    
      />
      
      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
          if(this.state.education === true){
            this.setState({'education': false})
            // 
          } else {
            this.setState({'education': true})
            // 
          }
        }} style={styles.touchableOpacity}>
      <Image
        source={education}
        resizeMode="contain"
        style={styles.icon}    
      />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
         if(this.state.outdoors === true){
          this.setState({'outdoors': false})
          // 
        } else {
          this.setState({'outdoors': true})
          // 
        }        
        }}style={styles.touchableOpacity}>
      <Image 
        source={outdoors}
        style={styles.icon}    
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        if(this.state.sports === true){
          this.setState({'sports': false})
          // 
        } else {
          this.setState({'sports': true})
          // 
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={sports}
          style={styles.icon}    
        />
      </TouchableOpacity>

      </View>
      <View style={styles.wordRowContainer}>
      <Text style={styles.word}>Education</Text>
      <Text style={styles.word}>Outdoors</Text>
      <Text style={styles.word}>Sports</Text>
      </View>


      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
          if(this.state.events === true){
          this.setState({'events': false})
          // 
        } else {
          this.setState({'events': true})
          // 
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={events}
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          if(this.state.food === true){
          this.setState({'food': false})
          // 
        } else {
          this.setState({'food': true})
          // 
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={food}
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          if(this.state.wellness === true){
          this.setState({'wellness': false})
          // 
        } else {
          this.setState({'wellness': true})
          // 
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={wellness}
          style={styles.icon}    
        />
      </TouchableOpacity>
      </View>
      <View style={styles.wordRowContainer}>
      <Text style={styles.word}>Events</Text>
      <Text style={styles.word}>Food</Text>
      <Text style={styles.word}>Wellness</Text>
      </View>



      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
         if(this.state.children === true){
          this.setState({'children': false})
          // 
        } else {
          this.setState({'children': true})
          // 
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={children}
          style={styles.icon}    
        />
      </TouchableOpacity>
      
      
      <TouchableOpacity onPress={() => {
          if(this.state.travel === true){
          this.setState({'travel': false})
          // 
        } else {
          this.setState({'travel': true})
          // 
        }
        }}style={styles.touchableOpacity}>
      <Image 
        source={travel}
        style={styles.icon}    
      />   
      </TouchableOpacity>   
      
      
      <TouchableOpacity onPress={() => {
        if(this.state.volunteer === true){
          this.setState({'volunteer': false})
          // 
        } else {
          this.setState({'volunteer': true})
          // 
        }
        }}style={styles.touchableOpacity}>
      <Image 
        source={volunteer}
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
        if(this.state.art === true){
          this.setState({'art': false})
          
        } else {
          this.setState({'art': true})

        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={art}
          style={styles.icon}    
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
         if(this.state.tech === true){
          this.setState({'tech': false})

        } else {
          this.setState({'tech': true})

        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={tech}
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
         if(this.state.drink === true){
          this.setState({'drink': false})
          
        } else {
          this.setState({'drink': true})
          
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={drink}
          style={styles.icon}    
        />
      </TouchableOpacity>
      </View>
      <View style={styles.wordRowContainer}>
      <Text style={styles.word}>Art</Text>
      <Text style={styles.word}>Tech</Text>
      <Text style={styles.word}>Drinks</Text>
      </View>
      <TouchableOpacity onPress={() => navigate('AddEventDetails', {...this.state}) }> 
        <Text style={styles.continue} >Continue</Text>
      </TouchableOpacity>
      </View>
      

    );
  }


  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
    headerLeft: 
      <TouchableOpacity onPress={() => {navigation.navigate('ProfileLandingPage',{currentUser: navigation.state.params.currentUser })} } >
        <Image style={styles.headerLeft} source={require('../images/back.png')} />
      </TouchableOpacity>,
       
  });
}

export default NewEventInterestedInScreen;

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
headerLeft:{
    height: 23,
    width: 15,
    marginTop: 50,
    marginLeft: 15
  },
InterestedIn: {
  top: "1%",
  marginBottom: '2%',
  width: '45%',
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



  
