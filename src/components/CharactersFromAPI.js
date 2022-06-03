import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import SingleCharPage from "./SingleCharPage";
import Filter from "./Filter";
let INITIAL_URL = "https://rickandmortyapi.com/api/character/?page=1"

export default function Favorites() {
    const [characters, setCharacters] = React.useState([])
    const [nextPage, setNextPage] = React.useState('')
    const [prevPage, setPrevPage] = React.useState('')
    const [singleCharShow, setSingleCharShow] = React.useState(false)
    const [singleCharPage, setSingleCharPage] = React.useState({})
    const [currentPage, setCurrentPage] = React.useState(1)
    const [filter, setFilter] =  React.useState({
        name: '',
        gender: 'All',
        status: 'All',
    })


    function getCharactersPage(url){

        const {name, gender, status} = filter

        if (name) url += `&name=${name}`
        if (gender !== 'All') url += `&gender=${gender}`
        if (status !== 'All') url += `&status=${status}`

         fetch(url)
            .then(res => {
                if (res.ok) return res.json()
                }
            )
            .then(data => {

                setCharacters(data.results)
                setNextPage(data.info.next)
                setPrevPage(data.info.prev)
            })
        }

    React.useEffect( () => {
        getCharactersPage(INITIAL_URL)
    }, [filter])

    const charactersRendering = characters.map( char => (
        <Character
            key = {nanoid()}
            characterData = {char}
            showCharPage = {() => showCharPage(char)}
        />
    ))

    function showCharPage(item){
        setSingleCharShow(true)
        setSingleCharPage(item)
    }

    function backToMain(){
        setSingleCharShow(false)
        setSingleCharPage({})
    }

    function flipToNext(){
        if (nextPage){
            getCharactersPage(nextPage)
            setCurrentPage(prev => ++prev)
        }
    }

    function flipToPrev(){
        if (prevPage){
            getCharactersPage(prevPage)
            setCurrentPage(prev => --prev)
        }
    }

    function nameFilter(event){
        let {name, value} = event.target
        setFilter( prevState => (
            {
                ...prevState,
                [name]: value
            }))
    }

    return (
        (!singleCharShow &&
            <main>
                <Filter
                    key = {nanoid()}
                    filter = {filter}
                    nameFilter = {nameFilter}
                />
                <div className ='character-container'>
                    {charactersRendering}
                </div>
                <div className="btn-container">
                    <button onClick={flipToPrev}>Prev</button>
                    <p>{currentPage}</p>
                    <button onClick={flipToNext}>Next</button>
                </div>
            </main>) || (
                <main>
                    <div className ='character-container'>
                        <SingleCharPage
                            key = {nanoid()}
                            characterData = {singleCharPage}
                            backToMain = {backToMain}
                        />
                    </div>
                </main>)

    )
}



