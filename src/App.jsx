import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:3001');
    this.state =  {
      currentUser: { name: "Bob" },
      messages: []
    }
    this.changeUserName = this.changeUserName.bind(this);
  }

  changeUserName(name) {
    this.setState({ currentUser: { name }});
  }

  addNewMessage(messageText) {
    const newMessageObj = {
      username: this.state.currentUser.name,
      content: messageText
    };
    this.socket.send(JSON.stringify(newMessageObj));
  }

  componentDidMount() {
    const messages = this.state.messages;

    this.socket.onmessage = (event) => {
      const newMessageObj = JSON.parse(event.data);
      messages.push(newMessageObj);

      this.setState({
       messages: messages
     });
    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar
          user={this.state.currentUser.name}
          onUserNameChange={this.changeUserName}
          newMessage={this.addNewMessage.bind(this)}
          />
      </div>
    );
  }
}
export default App;
