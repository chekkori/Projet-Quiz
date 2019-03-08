import React, { Component } from 'react';
import UserInfos from '../components/UserInfos/UserInfos';
import Notification from '../components/Notification/Notification';
import { Link,Switch } from 'react-router';

class NavBar extends Component {
    render() {
        return ( 
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="home">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item active">
                            <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/achievements">Achievements</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/challenge">Challenge</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="friends">Friends</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="setting">Setting</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="topScore">Top Score</Link>
                        </li>
                        </ul>
                        
                        <UserInfos />
                        <Notification />
                    </div>
                </nav>
                {this.props.children}
                </div>
        );
      }
}

export default NavBar;