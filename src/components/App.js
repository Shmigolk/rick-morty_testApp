import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import Pagination from "./pagination";
import SingleCharPage from "./SingleCharPage";

export default function App() {

    const [characters, setCharacters] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [singleCharShow, setSingleCharShow] = React.useState(false)
    const [singleCharPage, setSingleCharPage] = React.useState({})

    const itemsPerPage = 4

    React.useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(res => setCharacters(res.results))
    }, [])

    const charactersRendering = characters.map( char => (
        <Character
            key = {nanoid()}
            characterData = {char}
            showCharPage = {() => showCharPage(char)}
        />
        )).slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage)

    const pagination = getPaginationArray(characters, itemsPerPage)
        .map( pageNumber => <Pagination
            key = {pageNumber}
            pageNumber = {pageNumber}
            changePageNumber = {() => changePageNumber(pageNumber)}/>)

    function showCharPage(item){
        setSingleCharShow(true)
        setSingleCharPage(item)
    }

    function changePageNumber(number){
        setCurrentPage(number)
    }

    function backToMain(){
        setSingleCharShow(false)
        setSingleCharPage({})
    }

    return (
        !singleCharShow && <div>
      <div className ='character-container'>
          {charactersRendering}
      </div>
            <div className="pagination">{pagination}</div>
        </div> || <div className ='character-container'>
            <SingleCharPage
                key = {nanoid()}
                characterData = {singleCharPage}
                backToMain = {backToMain}
        />
        </div>
  )
}
/*auxiliary functions*/
function getPaginationArray(characters, itemsPerPage = 4){
    let Arr = []
    for (let page = 1; page <= Math.ceil(characters.length / itemsPerPage); page ++){
        Arr.push(page)
    }
    return Arr
}


