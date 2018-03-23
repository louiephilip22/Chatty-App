import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  /*
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById("messageListScroll");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  */

  render() {
    console.log("Rendering <MessageList/>");
    const messages = this.props.messages;
    const messageList = messages.map((message) => {
      return (
        <Message
          key={message.id}
          type={message.type}
          username={message.username}
          content={message.content}
        />
      );
    });

    return (
      <main className="messages" /*id="messageListScroll"*/>{messageList}</main>
    );
  }
}

export default MessageList;