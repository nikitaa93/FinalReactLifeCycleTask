import React, { Component } from 'react';

export default class Drop extends Component{
    render(){
        return(
            <label> Country : 
                <select name={this.props.name} defaultValue={this.props.default}  onChange={this.props.updateStateProp} >
                    <option  > India </option>
                    <option> France</option>
                    <option> USA </option>
                    <option> Australia </option>
                </select>
            </label>

        );
    }
}