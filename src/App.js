import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state = {
    persons: [
      { id: 'asdasd',  name: "Max", age: 10},
      { id: 'asdasda', name: "Max2", age: 11},
      { id: 'asdasd1', name: "Max3", age: 12}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice;

    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;  
      this.setState({ persons: persons })
  }


  togglePersonsHandler = () => {
    // this.setState({showPersons: true})
    const showState = this.state.showPersons;
    this.setState({showPersons: !showState})
  }

  render(){

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangeHandler(event, person.id)}
                      />
          })}
      </div> 
      );

      style.backgroundColor = 'red';
    }
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is really working</p>
        <button
        style={style}
        onClick={ () => this.togglePersonsHandler()}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;





// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {

//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: "Max", age: 10},
//       { name: "Max2", age: 11},
//       { name: "Max3", age: 12}
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "One", age: 2},
//         { name: "Three", age: 4},
//         { name: "Five", age: 6},
//       ]
//     })
//   }

//     return (
//       <div className="App">
//         <h1>Hi I'm React App</h1>
//         <p>This is really working</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );
// }

// export default App;
