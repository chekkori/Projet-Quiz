import React, { Component } from 'react'

export default class Champ extends Component {
    render() {
        return (
            <div className="form-group">
                <label for="exampleInputEmail1">{this.props.label} :</label>
                <input
                    type={this.props.type}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder={this.props.placeholder} />
                
            </div>
        )
    }
}
