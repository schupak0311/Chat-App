import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';


import { editMessage } from "../../actions/messageActions";
import { fetchMessage } from "../../routines/routines";

import "./messageEditor.css";

const textFieldStyles = {
  width: "90%",
  marginTop: "20px"
};

const titleStyles = {
  color: "#5682a3"
};

const primaryButtonStyles = {
  backgroundColor: "#5682a3",
  color: "#fff",
  marginRight: "10px"
};

class MessageEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isValid: false
    };

    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchMessage({
        id: this.props.match.params.id
      });
    }
  }

  onChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  onCancel() {
    this.props.history.push("/chat");
  }

  onSubmit(event) {
    event.preventDefault();

      this.props.editMessage(
        this.props.params.id,
        this.state.text.trim()
      );
    

    this.props.history.push("/chat");
  }

  render() {
    const { text } = this.state;
    const { editedMessage } = this.props;
    const { loading, error } = editedMessage;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="message-editor">
          <Typography variant="h4" component="h3" style={titleStyles}>
            {"Edit message"}
          </Typography>
          <TextField
            label="Edit"
            variant="outlined"
            multiline={true}
            value={text}
            onChange={this.onChange}
            rows={20}
            rowsMax={20}
            style={textFieldStyles}
            className="message-editor__text-area"
          />
          <div className="message-editor__button-wrapper">
            <Button
              type="submit"
              variant="contained"
              style={primaryButtonStyles}
            >
              Save
            </Button>
            <Button
              onClick={this.onCancel}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  editedMessage: state.editedMessage
});

const mapDispatchToProps = {
  fetchMessage,
  editMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageEditor);
