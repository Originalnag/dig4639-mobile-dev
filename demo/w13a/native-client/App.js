import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {trivia:[]}
  }
  componentDidMount() {
    console.log("Mounted")
    this.callApi()

  }

  async callApi() {
    const retValue = await fetch("https://opentdb.com/api.php?amount=10")
    const obj = await retValue.json()
    console.log(obj)
    this.setState({tivia:obj.results})
  }

  render() {
    return (
      <View style={StyleSheet.container}>
            {
              this.state.trivia.map((obj,index) =>
              <View key={index}>
              <Text>{obj.question}</Text>
              <Text>{obj.correct_answer}</Text>
              </View>
              )
            }
            </View>
    );
  }
  }

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
