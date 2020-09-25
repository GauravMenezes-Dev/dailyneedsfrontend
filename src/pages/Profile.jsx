import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/users/selector";

const Profile = ({ curUser }) => {
  console.log(curUser);
  return (
    <div className="container is-fluid">
      <div className="container card">
        <div className="card-content">
          <p className="title">{curUser.username}</p>
          <div className="content">{curUser.role}</div>
        </div>
      </div>
    </div>
  );
};

const mstp = () =>
  createStructuredSelector({
    curUser: selectCurrentUser,
  });

export default connect(mstp)(Profile);
