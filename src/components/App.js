import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid"

export default function App() {

    const [characters, setCharacters] = React.useState([])
    const [page, setPage] = React.useState(1)

    React.useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character").then(res => res.json())
            .then(res => setCharacters(res.results))
    }, [])

    function showCharPage(item){
        console.log(item.location.name)
    }

    let charactersRendering = characters.map( item => (
        <Character
            key = {nanoid()}
            characterData = {item}
            showCharPage = {() => showCharPage(item)}
        />
        )).slice(page * 3 - 3, page * 3)

    return (
      <div className ='character-container'>
          {charactersRendering}
      </div>
  )
}





