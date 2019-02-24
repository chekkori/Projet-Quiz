import React, { Component } from 'react';
import UserInfos from '../components/UserInfos/UserInfos';
import Notification from '../components/Notification/Notification';

class NavBar extends Component {
    render() {
        return ( 
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Achievements</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Challenge</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Friends</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Setting</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Top Score</a>
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

export default NavBar;