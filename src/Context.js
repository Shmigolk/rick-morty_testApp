import React, {createContext} from "react";
import {useParams} from "react-router-dom";


const Context = createContext()

function ContextProvider({children}) {
    const [characters, setCharacters] = React.useState([])
    const [pages, setPages] = React.useState(1)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [singleCharacterData, setSingleCharacterData] = React.useState({})
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
        console.log('this is use-effect')
        getCharactersPage(INITIAL_URL)
    }, [filter, currentPage])

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
        setCurrentPage(Number(newPageNumber))
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

    console.log('context-provider')

    return (

        <Context.Provider value={{characters,pages,currentPage, filter, flipToNext, flipToPrev, changePageNumberByPaginationBox,
        nameFilter, singleCharacterData}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}