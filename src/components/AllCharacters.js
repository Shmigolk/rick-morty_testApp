import React from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function  AllCharacters({filter, nameFilter, charactersRendering, NumberOfPages, flipToNext,flipToPrev, currentPage, changePageNumberByPaginationBox }) {
    return (
        <>
            <Filter
                key = {nanoid()}
                filter = {filter}
                nameFilter = {nameFilter}
            />
            <div className ='character-container'>
                {charactersRendering}
            </div>
            <Pagination
                NumberOfPages = {NumberOfPages}
                flipToNext = {flipToNext}
                flipToPrev = {flipToPrev}
                currentPage = {currentPage}
                changePageNumberByPaginationBox = {changePageNumberByPaginationBox}
            />
        </>

    )
}