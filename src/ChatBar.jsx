import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const name = this.props.user.name;

    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={name} disabled />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default ChatBar;