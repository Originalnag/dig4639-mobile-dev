import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const radio_props = [
  {label: "1", value: 0},
  {label: "2", value: 1},
  {label: "3", value: 3}
];

export default class AddTaskScreen extends React.Componenet {
  constructor(props) {
    super(props)
    this.state = {
      submitDisabled:true,
      taskText:"",
      taskPriority:0
    }
  }

  handleTextInput(text) {
    if(text.length > 0) {
    this.setState(
      {
        submitDisabled:false,
        taskText:text
      })
  } else {
    this.setState({submitDisabled:true})
    console.log(text)
  }
  }
  handleCreateTask() {
    console.log("Added")
    console.log(this.state.taskText, this.state.taskPriority)
    fetch('http://plato.mrl.ai:8080/todo/add', {
      method: "POST",
      headers: {
        "API":"flores",
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(
        {text:this.state.taskText,
        priority:this.state.taskPriority
      })
    })
      .then(res => res.json())
      .then(body => {
        console.log(body)
        if(body.added != undefined) {
          console.log("Successfully added task!")
          this.props.navigation.navigate("Todo")
        } else {
          console.log("Error adding task")
        }
        // this.setState({todoList:body.todo})
      })
  }

  handlePriorityInput(text) {

  }
  render() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <Input placeholder="e.g. Complete final project for DIG4639" 
    onChangeText={(text) => handleTextInput(text)}/>
    <View style={styles.priorityRow}>
    <Text style={styles.labelText}>Priority</Text>
   <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={false}
          onPress={(value) => {this.setState({taskPriority:value})}}
        />
        </View>
    <Button title="Create Task" 
    disabled={this.state.submitDisabled}
    onPress={() => this.handleCreateTask()}/>
    </ScrollView>
  );
}
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  labelText: {
    fontSize:25
  },
  priorityRow: {
    flex: 1,
    paddingTop:25,
    flexDirection: "row",
    textAlign: "center",
    backgroundColor: '#fafafa'
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
