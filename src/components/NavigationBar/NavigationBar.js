import React, { Component } from 'react'
import UserInfos from '../UserInfos/UserInfos';
import Notification from '../Notification/Notification';
import { Link,Switch } from 'react-router-dom';
export default class NavigationBar extends Component {
  render() {
    return ( 
        <div className="container" style={{width:'100%'}}>
                <nav style={{width:'100%',marginLeft:'0px'}} className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home"><i className="fa fa-home"></i>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item active">
                        <Link className="nav-link" to="/profile"><i className="fa fa-user"></i>Profile <span 
                            className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/achievements"><i className="fa fa-trophy"></i>Achievements</Link>
                    </li>
                    
                    <li className="nav-item active">
                        <Link className="nav-link" to="/challenge"><i className="fa fa-trash"></i>Challenge</Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/friends"><i className="fa fa-user"></i>Friends</Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/setting"><i className="fa fa-cog"></i>Setting</Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/topScore"><i className="fa fa-tasks"></i>Top Score</Link>
                    </li>
                    </ul>
                    <UserInfos />
                    <Notification />
                </div>
            </nav>
        </div>
);
  }
}
