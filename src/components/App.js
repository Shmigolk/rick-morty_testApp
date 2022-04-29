import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid"
import Pagination from "./pagination";

export default function App() {

    const [characters, setCharacters] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const itemsPerPage = 4

    React.useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(res => setCharacters(res.results))
    }, [])

    function showCharPage(item){
        console.log(item.location.name)
    }

    function changePageNumber(number){
        setCurrentPage(number)
    }

    const charactersRendering = characters.map( item => (
        <Character
            key = {nanoid()}
            characterData = {item}
            showCharPage = {() => showCharPage(item)}
        />
        )).slice(currentPage * itemsPerPage - itemsPerPage, currentPage * itemsPerPage)

    const pagination = getPaginationArray(characters, itemsPerPage)
        .map( item => <Pagination
            pageNumber = {item}
            changePageNumber = {() => changePageNumber(item)}/>)

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
    for (let page = 1; page <= characters.length / itemsPerPage; page ++){
        Arr.push(page)
    }
    return Arr
}


