import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 

class InterestedInScreen extends Component {
  constructor(props) {
    super(props);
    const {params} = props.navigation.state

    this.state = {
      currentUser: params.currentUser,
      art: "false",
      children: "false",
      drink: "false",
      education: "false",
      events: "false",
      food: "false",
      outdoors: "false",
      wellness: "false",
      sports: "false",
      tech: "false",
      travel: "false",
      volunteer: "false",
    };
  }
checkForInterests = () => {
  if (this.state.chosenAnInterest) {
    this.addInterests()
  }else {
    Alert.alert (
      'Please choose at least \n one interest topic.'
    )
  }
}
addInterests = async () => {
  console.log("addInterests Hit")
  this.handleClickedInterests()
  console.log("this.state: ", await this.state.currentUser)   
  const interestedIn = await fetch('http://capstoneeventapp.herokuapp.com/users/'+this.state.currentUser.id,{
    method:'PUT',
    credentials: 'include',
    body: JSON.stringify(this.state.currentUser),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (interestedIn.status === 200){
    console.log("Successfuly added interests")

    this.setUser()
    this.props.navigation.navigate('UploadPhotosOfYourself', {currentUser: this.state.currentUser})
  }else{
    console.log("Ahh, that's not it!")
  }
}

setUser = () => {
  this.setState({
    currentUser: this.state.currentUser
  })
}

handleClickedInterests = () => {
  this.setState({
    currentUser: {...this.state.currentUser,
    education: this.state.education,
    outdoors: this.state.outdoors,
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
}


  render() {
    const {navigate} = this.props.navigation;
    const{navigation}=this.props;
    const {state} = this.props.navigation;
    console.log("this.state.currentUser from InterestedIn: ", this.state.currentUser)
    // console.log("state.params.currentUser", state.params.currentUser)
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
            require('../images/InterestedIn.png')
        }
        style={styles.InterestedIn}    
      />
      
      <View style={styles.rowContainer}>
      <TouchableOpacity onPress={() => {
          if(this.state.education === "true"){
            this.setState({'education': "false", "chosenAnInterest": "false"})
            console.log(this.state)
          } else {
            this.setState({'education': "true", "chosenAnInterest": "true"})
            console.log(this.state)
          }
        }} style={styles.touchableOpacity}>
      <Image
        source={education}
        resizeMode="contain"
        style={styles.icon}    
      />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
         if(this.state.outdoors === "true"){
          this.setState({'outdoors': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'outdoors': "true", "chosenAnInterest": "true"})
          console.log(this.state)
        }        
        }}style={styles.touchableOpacity}>
      <Image 
        source={outdoors}
        style={styles.icon}    
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        if(this.state.sports === "true"){
          this.setState({'sports': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'sports': "true", "chosenAnInterest": "true"})
          console.log(this.state)
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
          if(this.state.events === "true"){
          this.setState({'events': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'events': "true", "chosenAnInterest": "true"})
          console.log(this.state)
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={events}
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          if(this.state.food === "true"){
          this.setState({'food': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'food': "true", "chosenAnInterest": "true"})
          console.log(this.state)
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={food}
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          if(this.state.wellness === "true"){
          this.setState({'wellness': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'wellness': "true", "chosenAnInterest": "true"})
          console.log(this.state)
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
         if(this.state.children === "true"){
          this.setState({'children': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'children': "true", "chosenAnInterest": "true"})
          console.log(this.state)
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={children}
          style={styles.icon}    
        />
      </TouchableOpacity>
      
      
      <TouchableOpacity onPress={() => {
          if(this.state.travel === "true"){
          this.setState({'travel': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'travel': "true", "chosenAnInterest": "true"})
          console.log(this.state)
        }
        }}style={styles.touchableOpacity}>
      <Image 
        source={travel}
        style={styles.icon}    
      />   
      </TouchableOpacity>   
      
      
      <TouchableOpacity onPress={() => {
        if(this.state.volunteer === "true"){
          this.setState({'volunteer': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'volunteer': "true", "chosenAnInterest": "true"})
          console.log(this.state)
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
        if(this.state.art === "true"){
          this.setState({'art': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'art': "true", "chosenAnInterest": "true"})
          console.log(this.state)
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={art}
          style={styles.icon}    
        />
      </TouchableOpacity>
  
      
      <TouchableOpacity onPress={() => {
         if(this.state.tech === "true"){
          this.setState({'tech': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'tech': "true", "chosenAnInterest": "true"})
          console.log(this.state)
        }
        }}style={styles.touchableOpacity}>
        <Image 
          source={tech}
          style={styles.icon}    
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
         if(this.state.drink === "true"){
          this.setState({'drink': "false", "chosenAnInterest": "false"})
          console.log(this.state)
        } else {
          this.setState({'drink': "true", "chosenAnInterest": "true"})
          console.log(this.state)
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
      <TouchableOpacity onPress={() => this.checkForInterests() }> 
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
