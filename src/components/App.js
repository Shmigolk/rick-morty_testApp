import React from "react";
import Character from "./Character";
import '../App.css';



function App() {

    const [character, setCharacter] = React.useState()
    React.useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character").then(res => res.json())
            .then(res => setCharacter(res.results))
    }, [])

    console.log(character)


    /*return (
      <div>

      <Character
          characterData = {character}/>
      </div>
  )*/;
}

export default App;
