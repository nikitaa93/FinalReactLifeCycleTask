import React, { Component } from 'react';

export default class TextElement extends Component{
    render(){
        return(
            <label>{this.props.labelName} 
                    <input type='text'  name = {this.props.name}  onChange={this.props.handleChange } defaultValue={this.props.defaultValue}/>  
            </label>
        )}
    }