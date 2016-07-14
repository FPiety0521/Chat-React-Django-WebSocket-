import React, { PropTypes } from 'react';

class Message extends React.Component {
  //const Message = ({ user, content, timestamp }) => (
  render() {
    const date = new Date(this.props.timestamp);
    return (
      <div className="message">
        <span className="user">{this.props.user}:</span>
        {this.props.content}
        <span className="timestamp">
          {date.toISOString()}
        </span>
      </div>
    );
  }
}

Message.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired, //TODO date not object
};

export default Message;
