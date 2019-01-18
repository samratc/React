import React, {Component} from 'react';
export default class TextBoxComponent extends Component {
    constructor() {
        super();
        this.onChangesOfTextBox = this.onChangesOfTextBox.bind(this);
    }
    onChangesOfTextBox(evt){
        this.props.onValueChange(evt);
    }
    render(){
        return (
            <div>
                <input 
                name={this.props.name}
                type={this.props.type}
                className='form-control' 
                placeholder={this.props.placeholder}
                onChange = {this.onChangesOfTextBox}
                />
             </div>
        );
    }
}
