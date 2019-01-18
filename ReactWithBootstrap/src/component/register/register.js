import React, {Component} from 'react';
import TextBoxComponent from '../textbox/textbox';
import DropdownComponent from '../dropdown/dropdown';
import  { CountryList } from '../../lookups/countries'
import { StateList } from '../../lookups/states';
export default class RegisterComponent extends Component {
    constructor() {
        super();
        this.state = {
            email :'',
            password:'',
            confirmPassword:'',
            username:'',
            country:'',
            state:'',
            showStateDropdown:false
        };
        this.countries =CountryList;
        this.states =StateList
        this.filteredStates=[];
        this.handleFormChanges =this.handleFormChanges.bind(this);
        this.CountrySelected = this.CountrySelected.bind(this);
        this.StateSelected = this.StateSelected.bind(this);
    }
    handleFormChanges(evt){
        let registration = this.state;
        registration[evt.target.name]=evt.target.value;
        this.setState(registration);
    }
    CountrySelected(evt){
        let currentState = this.state;
        if(evt.target.value!=''){
            currentState.showStateDropdown=true;
        }
        else{
            currentState.showStateDropdown=false;
        };
        currentState.state='';
        this.filteredStates = this.states.filter(x=>x.country==evt.target.value||x.country=='');
        currentState.country = evt.target.value;
        this.setState(currentState);
    }
    StateSelected(evt){
        let register = this.state;
        register.state = evt.target.value;
        this.setState(register);
    }

    render(){
        
       let stateDropdown;
       if(this.state.showStateDropdown){
           stateDropdown=  <DropdownComponent name='state' onValueChange={this.StateSelected} collection= {this.filteredStates}/>
       }
        return (
            <form className="form-group">
                <TextBoxComponent name='username' placeholder="User Name" onValueChange={this.handleFormChanges}/>
                <TextBoxComponent name='email' placeholder="Email" onValueChange={this.handleFormChanges}/>
                <TextBoxComponent name='password' type="password" placeholder="Password" onValueChange={this.handleFormChanges}/>
                <TextBoxComponent name='confirmPassword' type="password" placeholder="Confirm Password" onValueChange={this.handleFormChanges}/>
                <DropdownComponent name='country' onValueChange={this.CountrySelected} collection= {this.countries}/>
                {stateDropdown}
                
             </form>
        );
    }
}
