import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid"
import Pagination from "./pagination";

export default function App() {

    const [characters, setCharacters] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const itemsPerPage = 3

    React.useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(res => setCharacters(res.results))
    }, [])

    function showCharPage(item){
        console.log(item.location.name)
    }

    const charactersRendering = characters.map( item => (
        <Character
            key = {nanoid()}
            characterData = {item}
            showCharPage = {() => showCharPage(item)}
        />
        )).slice(currentPage * 3 - 3, currentPage * 3)

    const pagination = getPaginationArray(characters, itemsPerPage)
        .map( item => <Pagination pageNumber = {item}/>)


    return (
        <div>
      <div className ='character-container'>
          {charactersRendering}
      </div>
            <div className="pagination">{pagination}</div>
        </div>
  )
}

function getPaginationArray(characters, itemsPerPage = 4){
    let Arr = []
    for (let page = 1; page <= characters.length / itemsPerPage - 1; page ++){
        Arr.push(page)
    }
    return Arr
}


