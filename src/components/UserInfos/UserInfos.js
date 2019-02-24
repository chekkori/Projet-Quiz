import React, { Component } from 'react'

export default class UserInfos extends Component {
  render() {
    return (
      <div className="d-flex flex-row-reverse">
        <div className="p-2 bd-highlight" >
            <img src={require('../../assets/images/th.jpg')} style={{height: '30px', width:'30px', borderRadius: '30px'}} />
        </div>
        <div className="p-2 bd-highlight">username</div>
      </div>
    )
  }
}