import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import Pagination from "./pagination";
import SingleCharPage from "./SingleCharPage";
/*import Filter from "./Filter";*/

export default function App() {

    const [characters, setCharacters] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [singleCharShow, setSingleCharShow] = React.useState(false)
    const [singleCharPage, setSingleCharPage] = React.useState({})
    const [filter, setFilter] =  React.useState({
        name: '',
        gender: '',
        status: '',
    })

    const itemsPerPage = 5
    const genders = ["Male", "Female", "Other", "All"].map( gender => <option value={gender}>{gender}</option>)
    const status = ["Alive", "Dead", "unknown"].map( status => <option value={status}>{status}</option>)

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
    function nameFilter(event){
        let {name, value} = event.target
        setFilter( prevState => (
            {
                ...prevState,
                [name]: value
            }))
        setCharacters(prevState => prevState.filter(char => {
            if ( !filter.name ||char.name.includes(filter.name)) return char
        }))
    }
    return (
        !singleCharShow &&
        <main>
            <div className= "filter-component">
                <input type="text"
                       className=''
                       placeholder='input name'
                       name='name'
                       value={filter.name}
                       onChange={nameFilter}
                />
                <label> Gender
                    <select>
                        {genders}
                    </select>
                </label>

                <label> Status
                    <select>
                        {status}
                    </select>
                </label>
            </div>
      <div className ='character-container'>
          {charactersRendering}
      </div>
            <div className="pagination">{pagination}</div>
        </main> || <div className ='character-container'>
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


