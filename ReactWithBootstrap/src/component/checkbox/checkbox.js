import React, {Component} from 'react';
export default class CheckBoxComponent extends Component {
    constructor() {
        super();
        this.onChangesOfCheckboxButton = this.onChangesOfCheckboxButton.bind(this);
       //const isEnabled= this.onChangesOfSignupButton.bind(this);
    }
    onChangesOfCheckboxButton(evt){
        this.props.onValueChange(evt);
    }
    render(){
        return (
            <label>
                <input 
                name={this.props.name}
                type={this.props.type}
                className='form-control' 
                onChange = {this.onChangesOfCheckboxButton}
                />
            </label>
        );
    }
}

