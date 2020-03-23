import React from 'react';
import './App.css';
import Card from './components/Card'

class Card extends React.Component {
  render() {
    return (
    <div className='card'>
      <h2>{this.props.title}</h2>
      </div>)
}
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {content:"", list: []}
  }

  aysnc getServerData(){
    const response = await fetch("http:localhost:3001")
      console.log("Received response from server!")
      console.log(response)
      let obj = await response.json()
      console.log("Processed response as JSON: ",obj)
      this.setState({content:obj.b})
      this.setState({list:obj.list})
  }

  componentDidMount() {
    console.log("Component did mount!")
      this.setState({content:obj.b})
    })
  }


  return () {
    return (
    <div>
      <p></p>{this.state.content}</p>
      {this.state.list.map((content, index) =>
      <Card key={index}a title={listObject.title}{listObj{content}>
    </div>
  )
}
}

export default App;
