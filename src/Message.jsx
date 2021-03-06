import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    return (
      <div>
        <div className={(this.props.type === 'incomingNotification') ? 'message system' : 'message'}>
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </div>
    )
  }
}

export default Message;