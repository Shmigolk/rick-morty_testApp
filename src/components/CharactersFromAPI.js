import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import SingleCharPage from "./SingleCharPage";
const INITIAL_URL = "https://rickandmortyapi.com/api/character"



export default function Favorites() {
    const [characters, setCharacters] = React.useState([])
    const [nextPage, setNextPage] = React.useState('')
    const [prevPage, setPrevPage] = React.useState('')
    const [singleCharShow, setSingleCharShow] = React.useState(false)
    const [singleCharPage, setSingleCharPage] = React.useState({})

    function getCharactersPage(url){
         fetch(url)
            .then(res => res.json())
            .then(res => {
                setCharacters(res.results)
                setNextPage(res.info.next)
                setPrevPage(res.info.prev)
            })}


    React.useEffect( () => {
        getCharactersPage(INITIAL_URL)
    }, [])

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
        }
    }

    function flipToPrev(){
        if (prevPage){
            getCharactersPage(prevPage)
        }
    }


    return (
        (!singleCharShow &&
            <main>
                <div className ='character-container'>
                    {charactersRendering}
                    <div className="btn-container">
                        <button onClick={flipToPrev}>Prev</button>
                        <button onClick={flipToNext}>Next</button>
                    </div>
                </div>
            </main>) || (
                <div className ='character-container'>
                    <SingleCharPage
                        key = {nanoid()}
                        characterData = {singleCharPage}
                        backToMain = {backToMain}
                    />
                </div>)

    )
}



