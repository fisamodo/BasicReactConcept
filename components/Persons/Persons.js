import React,{PureComponent} from 'react';

import Person from './Person/Person';


class Persons extends PureComponent{
     // static getDerivedStateFromProps(props,state){
     //       console.log('[Persons.js] getDerivedStateFromProps');
       //     return state;
      //}
     // componentWillReceiveProps(props){
      //      console.log('[Personsjs] componentWillReciveProps', props);
     // }
  /* shouldComponentUpdate(nextProps,nextState){
            console.log('[Perons.js] shouldComponentUpdate');
            if
            (
                  nextProps.persons !== this.props.persons
                  || nextProps.changed !== this.props.changed
                  ||nextProps.clicked !== this.props.click
            ){
                  return true;
            }else {
                  return false;
            }    
      }*/
      getSnapshotBeforeUpdate(prevProps, prevState){
            console.log('[Persons.js] getSnapShotBeforeUpdate');
            return {message:'Snapshot'};
      }

      componentDidUpdate(prevProps, prevState,snapshot){
            console.log('[Persons.js] componentDidUpdate');
            console.log(snapshot);
      }
      componentWillUnmount(){
            console.log('[Persons.js] componentUnmount');
      }
      render(){
      console.log('[Persons.js] rendering...');
      return  this.props.persons.map((person,index)=>{
            return (
       <Person 
        click={()=> this.props.clicked(index)}
        name={person.name}
         age={person.age}
         key={person.id}
         changed={(event)=>this.props.changed(event, person.id)}
         />
         );

      });
      
}
}

export default Persons;