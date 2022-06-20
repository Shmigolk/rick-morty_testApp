import React, {createContext} from "react";
import {useParams} from "react-router-dom";

const Context = createContext()

function ContextProvider({children}) {
    const [characters, setCharacters] = React.useState([])
    const [pages, setPages] = React.useState(1)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [filter, setFilter] = React.useState({
        name: '',
        gender: 'All',
        status: 'All',
    })

    let INITIAL_URL = `https://rickandmortyapi.com/api/character/?page=${currentPage}`

    function getCharactersPage(url) {

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
                console.error(err)
            })
    }

    React.useEffect(() => {
        getCharactersPage(INITIAL_URL)
    }, [filter, currentPage])

    function flipToNext() {
        if (currentPage < pages) {
            setCurrentPage(prev => ++prev)
        }
    }

    function flipToPrev() {
        if (currentPage > 1) {
            setCurrentPage(prev => --prev)
        }
    }

    function changePageNumberByPaginationBox(event) {
        const newPageNumber = event.target.dataset.value
        setCurrentPage(Number(newPageNumber))
    }

    function nameFilter(event) {
        let {name, value} = event.target
        setCurrentPage(1)
        setFilter(prevState => (
            {
                ...prevState,
                [name]: value
            }))
    }

    return (

        <Context.Provider value={{
            characters,
            pages,
            currentPage,
            filter,
            flipToNext,
            flipToPrev,
            changePageNumberByPaginationBox,
            nameFilter,

        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}