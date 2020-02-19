import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Aux from 'C:/Users/Korisnik/Desktop/REACT/myReactApp/react-complete-guide/src/hoc/Auxiliary.js'
import impclasses from 'C:/Users/Korisnik/Desktop/REACT/myReactApp/react-complete-guide/src/components/Persons/Person/Person.css';
import withClass from 'C:/Users/Korisnik/Desktop/REACT/myReactApp/react-complete-guide/src/hoc/withClass.js'
import AuthContext from 'C:/Users/Korisnik/Desktop/REACT/myReactApp/react-complete-guide/src/context/auth-context.js'

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
       // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }

    render(){
    console.log('Person.js] rendering...');
    return (
    <Aux>
        {this.context.authenticated ? <p>Authenticated</p>: 
        <p>Please log in </p>}
        <p onClick={this.props.click}>I'm  
         {this.props.name} and i am
        {this.props.age} year old!
        </p>,
        <p key ="i2">{this.props.children}</p>,
        <input
        key="i3" 
       // ref={(inputEl)=>{this.inputElement = inputEl}}
        ref = {this.inputElementRef}
        type="text" 
        onChange={this.props.changed}
        value={this.props.name}
        />
    </Aux> 
    );
}
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, impclasses.Person);
