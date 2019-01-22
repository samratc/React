import React, {Component} from 'react';
import TextBoxComponent from '../textbox/textbox';
import DropdownComponent from '../dropdown/dropdown';
import  { CountryList } from '../../lookups/countries'
import { StateList } from '../../lookups/states';
import RadioButtonComponent from '../radiobutton/radiobutton';
import CheckBoxComponent from '../checkbox/checkbox';
import SignupComponent from '../signup/signup';
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
            gender:'',
            Terms: false,
            signup:'',
            showStateDropdown:false,
            languages:[]
        };
        this.countries =CountryList;
        this.states =StateList
        this.filteredStates=[];
        this.handleFormChanges =this.handleFormChanges.bind(this);
        this.CountrySelected = this.CountrySelected.bind(this);
        this.StateSelected = this.StateSelected.bind(this);
        this.handleRadiobutton = this.handleRadiobutton.bind(this);
        this.handleCheckboxbutton = this.handleCheckboxbutton.bind(this);
    }
    handleFormChanges(evt){
        let registration = this.state;
        registration[evt.target.name]=evt.target.value;
        this.setState(registration);
    }
    CountrySelected(evt){
        let currentState = this.state;
        if(evt.target.value){
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
    handleRadiobutton(evt){
        let register = this.state;
        register.gender = evt.target.value;
        this.setState(register);
    }
    handleCheckboxbutton(evt){
        let register = this.state;
        register.Terms = evt.target.checked;
        this.setState(register);
    }
    handleSignupbutton(evt){
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
                <DropdownComponent name='country' onValueChange={this.CountrySelected} collection= {this.state.languages}/>
                {stateDropdown}
                <RadioButtonComponent name ='gender' value='male' type='radio' onValueChange={this.handleRadiobutton}/>male
                <RadioButtonComponent name ='gender' value='female' type='radio' onValueChange={this.handleRadiobutton} />female<br/>
                <CheckBoxComponent  name='checkbox' value='Terms'  type="checkbox"   onValueChange={this.handleCheckboxbutton} />Terms<br/>
                <SignupComponent  name='signup' value='submit'  type="button"  isdisbaled={!this.state.Terms} onValueChange={this.handleSignupbutton} />

             </form>
        );
    }
    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/lang/es')
        .then(results=>{
            console.log(results)
            return results.json()
        }).then(result=>{
            let currentState = this.state;
            currentState.languages=result.map((item,index)=>{
                return {name:item.name, value:item.alpha2Code}
            })
            console.log(currentState.languages)
            this.setState(currentState)
        }).catch(err=>{
            console.log(err)
        }) 
    }
}
