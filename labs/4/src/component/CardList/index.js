import React from "react";
import Card from "../Card/";
import data from "../data.json";

class CardList extends React.Component {
  
    constructor(props) {
  
      super(props);
  
      this.state = {cards: data.cards};
  
    }
    render() {
      return(
        this.state.cards.map()
      ) 

    }
  }