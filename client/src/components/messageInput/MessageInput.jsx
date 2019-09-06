import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {addMessage} from '../../actions/messageActions';

import { buttonStyle } from './messageInputMaterialStyles';
import "./messageInput.css";

class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      messageText: ""
    };
  }

  handleSubmit(e, messageText) {
    e.preventDefault();

    this.props.addMessage(messageText);
  }

  onChange(event) {
    const value = event.target.value;

    this.setState({
      messageText: value
    });
  }

  render() {
    const { messageText } = this.state;
    return (
      <form
        onSubmit={(e) => this.handleSubmit(e, messageText)}
        className={"form form--chat"}
      >
        <Input
          placeholder="Enter the message"
          value={messageText}
          onChange={e => this.onChange(e)}
          className="form__input"
        />
        <Button
          type="submit"
          // onClick={e => this.handleSubmit(e, messageText)}
          style={buttonStyle}
        >
          SUBMIT
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessage(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(MessageInput);