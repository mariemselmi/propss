import React from "react";
import PropTypes from "prop-types";


function Profile(props){
    {props.handleName(props.fullName)}
    return(
        <div>
            <div>
            <h1 style={{color: "red"}}>{props.fullName}</h1>
            <h4>{props.bio} {props.profession}</h4>
            <img src={props.children}/>
            </div>
        </div>
    )
}
Profile.defaultProps ={
   fullName: "name"
}
Profile.propTypes = {
    fullName: PropTypes.string
  };

export default Profile;
