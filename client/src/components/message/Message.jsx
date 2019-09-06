import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { deleteMessage, startEditing } from "../../actions/messageActions";
import { connect } from "react-redux";

import {
  cardStyle,
  cardContentStyle,
  avatarStyle
} from "./messageMaterialStyles";
import "./message.css";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false
    };
  }

  handleDelete = () => {
    this.props.deleteMessage(this.props.identifier);
  };

  openModal = () => {
    this.props.startEditing(this.props.message, this.props.identifier);
  };

  toggleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
  };

  render() {
    const {
      isCurrentUserMessage,
      avatar,
      username,
      message,
      id,
      createdAt,
      onMessageEdit
    } = this.props;
    const { isLiked } = this.state;

    return (
      <div
        className={isCurrentUserMessage ? "message--self" : "message--other"}
      >
        <Card style={cardStyle} className="message__card" raised={true}>
          <CardContent style={cardContentStyle}>
            {isCurrentUserMessage ? null : (
              <div className="message__avatar">
                <Avatar alt={username} src={avatar} style={avatarStyle} />
              </div>
            )}

            <div className="message__text-wrapper">
              <div className="message__username">
                <Typography variant="subtitle2" component="h1" color="primary">
                  {username}
                </Typography>
              </div>
              <div className="message__body">
                <Typography variant="body1" component="p" color="textPrimary">
                  {message}
                </Typography>
              </div>
              <div className="message__creation-date">
                <Typography
                  variant="subtitle2"
                  component="h6"
                  color="textSecondary"
                >
                  {createdAt}
                </Typography>
              </div>
              {isCurrentUserMessage ? (
                <div className="message__control">
                  <i className="far fa-edit" onClick={() => onMessageEdit(id)} />
                  <i className="far fa-trash-alt" onClick={this.handleDelete} />
                </div>
              ) : null}
            </div>
          </CardContent>
        </Card>
        {isCurrentUserMessage ? null : (
          <div className={isLiked ? "like--open" : "like"}>
            <i
              className={isLiked ? "fas fa-heart" : "far fa-heart"}
              onClick={this.toggleLike}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCurrentUserMessage: state.currentUser.username
});

const mapDispatchToProps = {
  deleteMessage,
  startEditing
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
