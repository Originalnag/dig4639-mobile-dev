import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Button, ScrollView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { Card } from 'react-native-elements'

const HEADERS = {
  "method": "GET",
    "headers": {
    "api":"flores",
    "Content-Type" : "application/json",
    "Accept":"application/json"
  }
}

const HEADERS2 = {
  "method": "POST",
  "headers": {
    "api":"flores",
    "Content-Type" : "application/json",
    "Accept":"application/json"
  }
}

export default class HomeScreen extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    contacts:[], 
    name:"", 
    number:"", 
    profile:[]
  };
}
  

  
  callApi() {
    window.fetch("http://plato.mrl.ai:8080", HEADERS)
    .then(response => response.json())
    .then(data => console.log(data))
   }

   componentDidMount() {
     console.log("Effect has run")
      window.fetch("http://plato.mrl.ai:8080/contacts", HEADERS)
         .then(response => response.json())
          .then(data => this.setState({contacts:data.contacts}));
     }
   

   Adding() {
    console.log("Adding Contact")
    console.log(this.state.name)
    console.log(this.state.number)
    let newContacts = this.state.contacts.concat({name: this.state.name, number:this.state.number})
    window.fetch("http://plato.mrl.ai:8080/contacts/add", 
    {
      ...HEADERS2,
      body: JSON.stringify({name: this.state.name, number: this.state.number })
    })
      .then(response => response.json())
      .then(body => {
        console.log(body)
          this.setState({contacts: newContacts})
        })
  }

  delete = (position) => {
    var newContacts = [this.state.contacts]
    window.fetch('http://plato.mrl.ai:8080/contacts/remove', {
      ...HEADERS2,
      body: JSON.stringify({ position: position })
    })
      .then(response => response.json())
      .then(body => {
        console.log(body)
        if (body.removed != undefined) {
          newContacts = this.state.contacts.filter((v, i) =>
            (i != position))
          this.setState({ contacts: newContacts })
        }
      })}
      
  
      Profile = () => {
        window.fetch("http://plato.mrl.ai:8080/profile", 
        {
          ...HEADERS
        })
        .then(response => response.json())
        .then((data) => {
          this.setState({profile: data})
          console.log(data)
        })}
          
   render() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      <TextInput style = {styles.input}
        placeholder = "Username"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
        onChangeText={text => {
          this.setState({name:text})
        }}
      />
       <TextInput style = {styles.input}
        placeholder = "Number"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
        onChangeText={text => {
          this.setState({number:text})
        }}
      />
      <View style ={styles.buttons}>
      <Button
        color = "#5FBEF9"
        style = {styles.submitButton}
        title="Add Contact"
        onPress = {
        () => this.Adding()
        }
        >
        </Button>
        {
           this.state.contacts.map((contact, i) => <>
           <Card key={i}  
           title={`name: ${contact.name} number: ${contact.number}`} >
        <Button
        title ="Delete"
        onPress={() => this.delete(i)}
      />
      </Card>
      </>)
        }
        <Button
        color = "#EC75FA"
        style = {styles.submitButton}
        title="Show Profile"
        onPress = {
        () => this.Profile()
        }
        />
      <Button 
        onPress={() => this.callApi()}
        title="Call the API"
        color="#841184"
        accessibilityLabel="Calls the remote API for contacts"
      />
      </View>
      </ScrollView>
      </View>
  );
}
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'fff111'
  },
  buttons: {
    marginTop:2,
    paddingh:5,
    border:50,
    
  },
  input: {
    margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 0.5,
      backgroundColor: "#FFFFFF"
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
