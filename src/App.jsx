import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      currentUser: { name: "Bob" },
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  random() {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let alphabet = `1234567890${letters}${letters.toUpperCase()}`;

    let output = '';
    for (let i = 0; i < 6; i+=1) {
      output += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return output;
  }

  addNewMessage(messageText) {
    const newMessageObj = {
      id: this.random(),
      username: this.state.currentUser.name,
      content: messageText
    };
    const newMessages = this.state.messages.concat(newMessageObj);

    this.setState({ messages: newMessages });
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} newMessage={this.addNewMessage.bind(this)} />
      </div>
    );
  }
}
export default App;
