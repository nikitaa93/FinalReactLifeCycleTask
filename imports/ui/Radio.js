import React, { Component } from 'react';

export default class Radio extends Component{
    render(){
        return(
            
              <div >
                <label>
                  <input type='radio' name={this.props.name} value='Female'   checked={this.props.defaultValue === 'Female'} onChange={this.props.updateRadioProp} />
                  Female
                </label>
              
                <label>
                  <input type='radio' name={this.props.name} value='Male'   checked={this.props.defaultValue === 'Male'} onChange={this.props.updateRadioProp} />
                  Male
                </label>
              </div>
            
        );
    }
}