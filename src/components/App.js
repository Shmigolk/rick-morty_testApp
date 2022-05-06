import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import Pagination from "./pagination";
import SingleCharPage from "./SingleCharPage";
import Filter from "./Filter";

export default function App() {

    const [characters, setCharacters] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [singleCharShow, setSingleCharShow] = React.useState(false)
    const [singleCharPage, setSingleCharPage] = React.useState({})
    const [filter, setFilter] =  React.useState({
        name: '',
        gender: 'All',
        status: 'All',
    })

    const itemsPerPage = 4

    React.useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(res => setCharacters(filterWrap(res.results, filter)))
    }, [filter])

    const charactersRendering = characters.map( char => (
        <Character
            key = {nanoid()}
            characterData = {char}
            showCharPage = {() => showCharPage(char)}
        />
        )).slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage)

    const pagination = getPaginationArray(characters, itemsPerPage)
        .map( pageNumber => {
            const styles = {opacity: pageNumber===currentPage? "30%" : '100%'}
            return <Pagination
                key={pageNumber}
                pageNumber={pageNumber}
                style={styles}
                changePageNumber={() => changePageNumber(pageNumber)}/>
        })

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
        setCharacters(prevState => filterWrap(prevState, filter))
    }

    return (
        (!singleCharShow &&
        <main>
            <Filter
                filter = {filter}
                nameFilter = {nameFilter}
                key = {nanoid()}
            />
      <div className ='character-container'>
          {charactersRendering}
      </div>
            <div className="pagination">{pagination}</div>
        </main>) || (<div className ='character-container'>
            <SingleCharPage
                key = {nanoid()}
                characterData = {singleCharPage}
                backToMain = {backToMain}
        />
        </div>)
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

function filterWrap(arr, filter){
return arr.filter(char => {
    const nameContains = char.name.toUpperCase().includes(filter.name.toUpperCase())
    const genderMatch = char.gender === filter.gender
    const statusMatch = char.status === filter.status
        if ((!filter.name || nameContains)
            && ((filter.gender === 'All')
                || genderMatch) && (filter.status === 'All' || statusMatch)) return char
    })
}
