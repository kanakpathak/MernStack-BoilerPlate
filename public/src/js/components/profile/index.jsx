import React, {Component} from 'react';
import DisplayProfile from './DisplayProfile.jsx';

export default class Profile extends Component{

    constructor(){
        super();
        this.state = {
            name: ''
        };
    }

    render(){
        return(
            <DisplayProfile 
                user={this.state.user}
            />
        );
    }
}