import React from "react";
import voteImage from "./../img/vote.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Forum</h1>
      <img src={voteImage} alt="vote"/>
    </React.Fragment>
  );
}

export default Header;