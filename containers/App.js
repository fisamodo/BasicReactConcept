import React, { Component } from 'react';
import impclasses from './App.css';
import Aux from 'C:/Users/Korisnik/Desktop/REACT/myReactApp/react-complete-guide/src/hoc/Auxiliary.js'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass.js';
import AuthContext from 'C:/Users/Korisnik/Desktop/REACT/myReactApp/react-complete-guide/src/context/auth-context.js'

class App extends Component{ 
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state= {
   persons:[
     {id: 'asd1',name:' Max',age:28},
     {id: 'adaw',name:' Manu',age:29},
     {id: 'asdd2',name:' Steph',age:12}
   ],
   otherState:'other value',
   showPersons: false,
   showCockpit: true,
   changeHandler : 0,
   authenticated: false
 }
 static getDerivedStateFromProps(props,state){
   console.log('[App.js] getDerivedStateFromProps',props);
   return state;
 }

// componentWillMount(){
  //console.log('[App.js componentWillMount');
//}
 componentDidMount(){
   console.log('[App.js componentDidMount');
 }
 shouldComponentUpdate(nextProps, nextState){
   console.log('[App.js] shouldComponentUpdate');
   return true;
  }
 componentDidUpdate(){
   console.log('[App.js] componentDidUpdate');
 }


 switchNameHandler =(newName, id)=>{
  const personIndex = this.state.persons.findIndex(p=>{
    return p.id===id;
  });
  const person ={
    ...this.state.persons[personIndex]
  }

  person.name = newName.target.value;

  const persons=[...this.state.persons];

  persons[personIndex] = person;

  this.setState((prevState, props )=>{
    return { 
     persons:persons,
     changeHandler: this.state.changeHandler+1 
    };
    });
};
deletePersonHandler=(personIndex)=>{
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
}
togglePersonsHandler=(event)=>{
const doesShow = this.state.showPersons;
this.setState({showPersons:!doesShow})
}
loginHandler = () =>{
  this.setState({authenticated:true})
};

 render() {
    console.log('[App.js] render');
   let persons = null;

   if(this.state.showPersons)
   {
     persons =  (
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.switchNameHandler}
        isAuthenticated={this.state.authenticated}
        />
     );
    }
  
   
   

    return (
    <Aux> 
       <button 
      onClick={()=>{
        this.setState({showCockpit:false});
      }}
      >
        Remove Cockpit
      </button>
      <AuthContext.Provider 
        value={{
        authenticated: this.state.authenticated,
        login: this.loginHandler
        }}
        >
      {this.state.showCockpit ? (
      <Cockpit 
        title ={this.props.appTitle}
        showPersons ={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}
        login = {this.loginHandler}
      /> ): null}
       {persons}
       </AuthContext.Provider>
      </Aux>
      
    );
  };}
export default withClass(App, impclasses.App);
    
