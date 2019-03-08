import React, { Component } from 'react';
import logo from './logo.svg';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './Screens/Login/Login';
import Inscription from './Screens/Inscription/Inscription';
import Profile from './Screens/Profile/Profile';
import {BrowserRouter ,Route,browserHistory} from 'react-router-dom';
import './App.css';
import Hom from './Screens/Hom/Hom';
import Achievment from './Screens/Achievment/Achievment';
import DashBoard from './Screens/DashBoard/DashBoard';
import Notification from './components/Notification/Notification';
import {Switch,Link} from 'react-router';


class App extends Component {
  render() {
    return (
      //<NavigationBar />
      //<Login />
      //<Profile />
      //<Inscription />
      //<Achievment />
       
          /*<Router>
              <div>
               
                <Switch>
                  <Route path="/hom" exact render={() => <Hom /> } />
                 <Route path="/inscription" exact render={() => <Inscription /> } />
                 <Route path="/Login" exact render={() => <Login />} />
                 <Route path="/Profile" exact render={() => <Profile />} />
                </Switch>
              </div>
          </Router>*/

           
             
               
                <div>
                   
                
                    <Switch>
                        <Route exact path={"/"} component={Hom}/>
                        <Route path={"/dashBoard"} component={DashBoard} />
                        <Route path={"/inscription"} component={Inscription} />
                        <Route path={"/achievement"} component={Achievment} />
                        <Route path={"/profile"}  component={Profile} />
                        <Route path={"/login"}  component={Login} />
                        <Route path={"/notification"}  component={Notification} />
                    </Switch>
                </BrowserRouter>
               
                </div>
                 

                
                
              
          
       
    );
  }
}

export default App;
