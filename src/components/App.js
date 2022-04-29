import React from "react";
import Character from "./Character";
import '../App.css';

function App() {

    const [characters, setCharacters] = React.useState([])
    React.useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character").then(res => res.json())
            .then(res => setCharacters(res.results))
    }, [])

    let charactersRendering = characters.map( item => (
        <Character characterData = {item}/>
        ))

    return (
      <div className ='character-container'>
          {charactersRendering}
      </div>
  )
}

export default App;
