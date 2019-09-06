import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

import "./user.css";

const User = ({ name, email, onDelete}) => {
  return (
    <div className="user">
      <Card className="user__inner">
        <CardContent className="user__text-wrapper">
          <Typography
            variant="h6"
            component="h1"
            color="textPrimary"
            className="user__text"
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            color="primary"
            className="user__text"
          >
            {email}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button color="yellow">EDIT</Button> */}
          <Button onClick={onDelete}  color="secondary">DELETE</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default User;
