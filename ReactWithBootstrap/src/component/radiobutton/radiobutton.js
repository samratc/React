import React, {Component} from 'react';
import './radiobutton.scss';
export default class RadioButtonComponent extends Component {
    constructor() {
        super();
        this.onChangeOfRadioButton = this.onChangeOfRadioButton.bind(this);
    }
    onChangeOfRadioButton(evt){
        this.props.onValueChange(evt);
    }
    render(){
        return (
            <label>
                <input 
                name={this.props.name}
                type={this.props.type}
                className='form-control' 
                onChange = {this.onChangesOfRadioButton}
                />
            </label>
        );
    }
}
