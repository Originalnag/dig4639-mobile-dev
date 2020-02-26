import "./index.css"
import React from 'react'

class Card extends React.Component {
    render() {
        return (
        <div className = "card">
            <span className="close"
            onClick={this.props} 
        datatitle={this.props.title}>&times;</span>
            {this.props.content}
            <h3>This is a title</h3>
        <p>This is the content</p>
        </div>
        )
    }
}
export default Card;


