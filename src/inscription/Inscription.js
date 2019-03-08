import React, { Component } from 'react';

export default class Inscription extends Component {
  render() {
    return (
        <div>
        <div style={{margin:'20px' }}>
            <img className="rounded mx-auto d-block" src={require('../assets/images/logo.png')}  style={{height: '200px', width:'200px'}} />
        </div>
        <div className="d-flex justify-content-center align-items-center" >
            <form style={{ width:"350px"}}>
                <div className="form-group">
                    <label for="exampleInputEmail1">User Name :</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Angelina"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email :</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email Confirmation :</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="name@example.com"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword2">Passwordn Confirmation</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                </div>
                <div align="center">
                <button type="submit" className="btn btn-primary">Sign Up</button>   <button type="reset" className="btn btn-primary">Cancel</button>
                </div>

            </form>    
        </div>
    </div>
    
    )
  }
}
