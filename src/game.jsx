import {useState} from 'react';

const Game = () => { }

export default Game;

const gane = () => { 
    const [playerName, setPlayername] = useState("");
    const [players,setPlayers] = useState([]);
}

const AddGamers = () => {
return(
    <form>
        <input type="text" placeholder="Enter name:"/>
        <button type="button"> Add Player </button>
    </form>    
)
}
export default AddGamers;
