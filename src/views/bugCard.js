import React from "react";
import "./bug.css"
function BugCard(props) {
    const {name,priority,version}=props.bug;
    function Clicked(){
        props.clicked(props.name);
    }

  return (<div className="bugCard" onClick={Clicked}>
      <h2 className="name">{name}</h2>
     
      <h4 className="priority">{priority}</h4>
      <h4 className="version">{version}</h4>
      
  </div>);
}

export default BugCard;
