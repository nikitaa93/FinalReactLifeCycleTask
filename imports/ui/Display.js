import React, { Component } from 'react';

export default class Display extends Component{

    render(){
        return(
            <h3>
                Name : {this.props.name} 
            
                <br/>
                Contact : {this.props.contact}
                <br/>
                Email : {this.props.email}
                <br/>
                Country : {this.props.country}
                <br/>
                Gender : {this.props.gender}
            </h3>
        )}
    }
            
            