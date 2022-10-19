import './App.css';
// import Person from './Person';
// import Products from './Components/Props/Products';
// import Parent from './Components/Props/Parent';
// import TrueFalse from './Components/States/TrueFalse';
// import Counter from './Components/States/Counter';
// import Converter from './Components/States/Converter';
// import Person from './Components/Static-Data/Person';
// import people from './Components/Static-Data/people.json';
// import Poke from './Components/Data-Requests/Poke';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import Counter from './Components/States/Counter';
// import OMDB from './Components/Data-Requests/OMDB';
import SearchableList from './Components/Lifting-State/SearchableList';
import Home from './Components/Routing/Home';
import Navigation from './Components/Routing/Navigation';
import ParamsExample from './Components/Routing/ParamsExample';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>I AM A HEADER</h1>
        </header>
        <nav>
          <Link to="/home">
            Home
          </Link>
          <Link to="/liftingState">
            <button type="button">Lifting State</button>
          </Link>
          <Link to="/state">
            State
          </Link>
          <Navigation />
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/state" element={<Counter />} />
          <Route path="/liftingState" element={<SearchableList />} />
          <Route path="/params/:colour" element={<ParamsExample />} />
        </Routes>
        <footer>
          I AM A FOOTER
        </footer>
      </Router>
      {/* <Me name="Jordan" age={28} job="Trainer"/> */}
      {/* {Me({ name: "JH", age: 28, job: "Trainer"})} */}
      {/* {Heading()} */}
      {/* <Heading/> */}
      {/* <Converter/> */}
      {/* <TrueFalse/> */}
      {/* <Counter/> */}
      {/* {
        people.map(person => {
          console.log("PERSON:", person);
          return <Person
          key={person.name + person.age}
          name={person.name}
          age={person.age}
          job={person.job}/>;
        })
      } */}
      {/* <Poke /> */}
      {/* <OMDB /> */}
    </div>
  );
}

export default App;