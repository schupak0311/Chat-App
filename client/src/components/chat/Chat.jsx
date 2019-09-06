import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../header/Header";
import { Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import MessageList from "../messageList/MessageList";
import MessageInput from "../messageInput/MessageInput";
import { fetchMessages } from "../../routines/routines";
// import Popup from '../popup/Popup';
// import UserList from '../userList/UserList';
// import LoginPage from '../loginPage/LoginPage'

import { getMessages, messagesLoaded } from "../../actions/messageActions";

import "./chat.css";

const spinnerStyle = {
  color: "#5682a3"
};

// const API_URL = "https://api.myjson.com/bins/1hiqin";

// const loadMessage = async () => {
//   const response = await fetch(API_URL);
//   return response.json();
// };

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
  }
  componentDidMount() {
    this.props.fetchMessages();
  }

  getParticipants() {
    return new Set(this.props.messageData.messages.map(message => message.user)).size;
  };

  onEdit(id) {
    this.props.history.push(`/message/${id}`);
  }

  render() {
    const { currentUser, messageData} = this.props;
    const {messages, loading} = messageData

    return (
      <>
        {!currentUser && <Redirect to="/login" />}

        <div className="chat">
          <div className="chat__inner">
            <Header
              usersNumber={this.getParticipants()}
              messagesNumber={messages.length}
              lastMessageTime={
                messages.length
                  ? messages[messages.length - 1].created_at
                  : null
              }
            />
            {loading ? (
              <div className="spinner">
                <CircularProgress style={spinnerStyle} size="50px" />
              </div>
            ) : (
              <div className="chat__content">
                <MessageList messages={messages} onMessageEdit={this.onEdit} />
                <MessageInput />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  messageData: state.messageData,
  currentUser: state.currentUser
});

const mapDispatchToProps = {
  fetchMessages,
  getMessages,
  messagesLoaded
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
