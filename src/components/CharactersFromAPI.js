import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import SingleCharPage from "./SingleCharPage";
import Filter from "./Filter";
import Pagination from "./Pagination";
import AllCharacters from "./AllCharacters";

export default function Favorites() {

    const [characters, setCharacters] = React.useState([])
    const [singleCharShow, setSingleCharShow] = React.useState(false)
    const [singleCharPage, setSingleCharPage] = React.useState({})
    const [pages, setPages] = React.useState(1)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [filter, setFilter] =  React.useState({
        name: '',
        gender: 'All',
        status: 'All',
    })
    let INITIAL_URL = `https://rickandmortyapi.com/api/character/?page=${currentPage}`

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
            .then(({results, info}) => {
                setCharacters(results)
                setPages(info.pages)
            })
             .catch(err => {
                 setCharacters([])
                 setPages(1)
             })
        }

    React.useEffect( () => {
        getCharactersPage(INITIAL_URL)
    }, [filter, currentPage])

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
        if (currentPage < pages){
            setCurrentPage(prev => ++prev)
        }
    }

    function flipToPrev(){
        if (currentPage > 1){
            setCurrentPage(prev => --prev)
        }
    }

    function changePageNumberByPaginationBox(event) {
        const newPageNumber = event.target.dataset.value
        setCurrentPage(newPageNumber)
    }

    function nameFilter(event){
        let {name, value} = event.target
        setCurrentPage(1)
        setFilter( prevState => (
            {
                ...prevState,
                [name]: value
            }))
    }

    return (
        (!singleCharShow &&
            <main>
                <AllCharacters
                    filter = {filter}
                    nameFilter = {nameFilter}
                    charactersRendering = {charactersRendering}
                    NumberOfPages = {pages}
                    flipToNext = {flipToNext}
                    flipToPrev = {flipToPrev}
                    currentPage = {currentPage}
                    changePageNumberByPaginationBox = {changePageNumberByPaginationBox}
                />
            </main>) || (
                <main>
                        <SingleCharPage
                            key = {nanoid()}
                            characterData = {singleCharPage}
                            backToMain = {backToMain}
                        />
                </main>)

    )
}



