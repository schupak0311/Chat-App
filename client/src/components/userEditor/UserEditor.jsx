import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { addUser } from "../../actions/userActions";

class UserEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      avatar: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const propName = e.target.name;
    this.setState({
      [propName]: e.target.value
    });
  }

  onCancel() {
    this.props.history.push("/users");
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addUser(
      this.state.username.trim(),
      this.state.password.trim(),
      this.state.avatar.trim()
    );
    setTimeout(() => {
      this.props.history.push("/users");
    }, 500)
  }

  render() {
    const { username, password, avatar } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <DialogTitle>Add a new user</DialogTitle>
        <DialogContent>
          <Input
            placeholder="username"
            name="username"
            value={username}
            onChange={this.onChange}
          />
          <Input
            placeholder="password"
            name="password"
            value={password}
            onChange={this.onChange}
          />
          <Input
            placeholder="avatar URL"
            name="avatar"
            value={avatar}
            onChange={this.onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">ADD</Button>
          <Button type="button" onClick={this.onCancel}>CANCEL</Button>
        </DialogActions>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addUser
};

export default connect(null, mapDispatchToProps)(UserEditor);
