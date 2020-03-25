import React from 'react';
import { StyleSheet, Text, View, Button, ListView } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.rows =["This is 1"]
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) !== r2});
    this.state = {
    content: "Hello World",
    dataSource: ds.clonewithRows(["This is 1", "This is 2", "This is 3"]),
    currentItem: 3
  
  }
    // console.log("Hello World")
  }

onPressHandler(evt) {
  console.log("clicked")
  this.setState({content: "Hello Glorious React Native World!"})
  this.setState({dataSource: this.state.dataSource.clonewithRows(["This is the new Data"])})
}

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.header}>{this.state.content}</Text>
      <Button style={styles.button} color="#990000" title="Click me" onPress={(evt) => onPressHandler(evt)}>
      </Button>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData)=> <Text key={rowData}</Text>}
      />
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
  header: {
    fontSize: 22
  }
});
