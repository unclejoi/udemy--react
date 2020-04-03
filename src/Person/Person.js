import React from 'react';
import './Person.css';

const person  = (props) => {
return(
    <div className="Person">
        <p onClick={props.click}>I'm a Person! My name is {props.name} and I'm {props.age} years old</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)


};

export default person;