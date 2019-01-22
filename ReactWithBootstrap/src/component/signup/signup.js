import React, {Component} from 'react';
export default class SignupComponent extends Component {
    constructor() {
        super();
        this.onChangesOfSignupButton = this.onChangesOfSignupButton.bind(this);
    }
    onChangesOfSignupButton(evt){
        this.props.onValueChange(evt);
    }

    render(){
        return (
                <button disabled={this.props.isdisabled}
                name={this.props.name}
                type={this.props.type}
                className='btn btn-primary' 
                onChange = {this.onChangesOfSignupButton}
                > Sign up </button>
        );
    }
}


