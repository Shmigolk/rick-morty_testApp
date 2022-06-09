import React, {useContext} from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import AllCharacters from "./AllCharacters";
import {Context} from "../Context";


export default function Favorites() {
    const {
            characters,
            pages,
            currentPage,
            filter,
            flipToNext,
            flipToPrev,
            changePageNumberByPaginationBox,
            nameFilter
        } = useContext(Context)

    const charactersRendering = characters.map( character => (
        <Character
            key = {nanoid()}
            characterData = {character}
        />
    ))

    return (
                <AllCharacters
                    filter = {filter}
                    nameFilter = {nameFilter}
                    charactersRendering = {charactersRendering}
                    NumberOfPages = {pages}
                    flipToNext = {flipToNext}
                    flipToPrev = {flipToPrev}
                    currentPage = {currentPage}
                    changePageNumberByPaginationBox = {changePageNumberByPaginationBox}/>

            )

}



