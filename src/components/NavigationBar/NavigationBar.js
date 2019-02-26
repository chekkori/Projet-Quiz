import React, { Component } from 'react'
import UserInfos from '../UserInfos/UserInfos';
import Notification from '../Notification/Notification';

export default class NavigationBar extends Component {
  render() {
    return ( 
        <div className="container" style={{width:'100%'}}>
                <nav style={{width:'100%',marginLeft:'0px'}} className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><i className="fa fa-home"></i>Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fa fa-user"></i>Profile <span 
                            className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fa fa-trophy"></i>Achievements</a>
                    </li>
                    
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fa fa-trash"></i>Challenge</a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fa fa-user"></i>Friends</a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fa fa-cog"></i>Setting</a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fa fa-tasks"></i>Top Score</a>
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
