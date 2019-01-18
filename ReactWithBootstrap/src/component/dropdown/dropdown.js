import React, {Component} from 'react';
export default class DropdownComponent extends Component {
    constructor() {
        super();
        this.onDropdownChange = this.onDropdownChange.bind(this);
    }
    onDropdownChange(evt){
        this.props.onValueChange(evt);
    }
    render(){
        return (
            
               <select  className='form-control'
               name={this.props.name}
               onChange = {this.onDropdownChange}>
               {
                   this.props.collection.map((item,index)=>{
                   return <option value={item.value}>{item.name}</option>
                  })
               }
             </select>
             
        );
    }
}
