import React from "react";
import { connect } from "react-redux";
import User from "../user/User";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { deleteUser } from "../../actions/userActions";
import { fetchUsers } from "../../routines/routines";

import "./userList.css";

const titleStyles = {
  marginTop: "10px",
  color: "#5682a3"
};

const spinnerStyle = {
  color: "#5682a3"
};

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  onAdd() {
    this.props.history.push("/user");
  }


  render() {
    const { usersData, deleteUser } = this.props;
    const { users, loading, error } = usersData;

    return (
      <div className="user-list">
        <Typography
          className="user-list__title"
          variant="h4"
          component="h4"
          style={titleStyles}
        >
          LIST OF USERS
        </Typography>

        <Button onClick={this.onAdd} color="primary">
          ADD USER
        </Button>
        {loading ? (
          <div className="spinner">
            <CircularProgress style={spinnerStyle} size="50px" />
          </div>
        ) : (
          <div className="user-list__list-wrapper">
            {users.map(({ id, username }) => {
              return (
                <User
                  onDelete={() => deleteUser(id)}
                  key={id}
                  name={username}
                  email={username + "@gmail.com"}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersData: state.usersData
});

const mapDispatchToProps = {
  fetchUsers,
  deleteUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
