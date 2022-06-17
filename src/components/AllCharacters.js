import React from "react";
import '../App.css';
import {nanoid} from "nanoid";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function  AllCharacters({charactersRendering}) {
    return (
        <main>
            <Filter
                key = {nanoid()}
            />
            <div className ='character-container'>
                {charactersRendering}
            </div>
            <Pagination />
        </main>

    )
}