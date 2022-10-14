import './App.css';
import Person from './Person';
import people from './people.json';

function App() {

    const Heading = () => <h1>Test</h1>

    const Me = (props) => {
        console.log("PROPS:", props);
      return ( 
        <>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </>
)};
return (
    <div classname="App">
        {
            people.map(person => {
                console.log("PERSON:", person);
                return <Person key={person.name + person.age} name ={person.age} job={person.job}/>;
                })
            }
        </div>
    );
}

export default App;