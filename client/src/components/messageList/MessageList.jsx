import React from "react";
import Message from "../message/Message";
import "./messageList.css";
import { connect } from "react-redux";

class MessageList extends React.Component {
  constructor() {
    super();
    this.messageList = React.createRef();
  }

  componentDidMount() {
    this.messageList.current.scrollTo(0, this.messageList.current.scrollHeight);
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages > prevProps.messages) {
      this.messageList.current.scrollTo(
        0,
        this.messageList.current.scrollHeight
      );
    }
  }

  render() {
    const { onMessageEdit, messages, onLike } = this.props;

    return (
      <div className="message-list" ref={this.messageList}>
        {messages.map((item, id) => {
          return (
            <Message
              key={id}
              id={id}
              avatar={item.avatar}
              onMessageEdit={onMessageEdit}
              // isCurrentUserMessage = {currentUser===item.user}
              username={item.user}
              message={item.message}
              createdAt={item.created_at}
              creator={item.creator}
              onLike={onLike}
              liked={item.is_liked}
            />
          );
        })}
      </div>
    );
  }
}



export default MessageList;
