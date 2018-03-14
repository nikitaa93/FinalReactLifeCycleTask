import React, { Component } from 'react';

export default class Error extends Component{
    render(){
        return(
            
            <label className={this.props.className} > 
                {this.props.error1} 
                {this.props.error2}
            </label>
        )}
    }