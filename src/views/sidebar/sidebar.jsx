import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {signOut} from "../../controllers/redux/authSlice"
import "./sidebar.css"

function Sidebar() {
    const dispatch=useDispatch();
    const { auth }= useSelector(state=>state);

    function logOut(){
        dispatch(signOut());
    }

  return <div className="sidebar">
        <Link className="navLink" to="/"><h1 className="brand">Bug Tracker</h1></Link>
        <ul>
            <li><Link to="/" className="navLink">Dashboard</Link></li>
            <li><Link to="/viewBugs" className="navLink">View Bugs</Link></li>
            {auth.admin&&<li><Link to="/create" className="navLink">Create Bug</Link></li>}
        </ul>
        <button className="navLink logout " onClick={logOut}> Log Out</button>
  </div>;
}

export default Sidebar;
