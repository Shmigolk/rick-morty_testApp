import React from "react";
import '../App.css';
import {nanoid} from "nanoid";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Footer from "./Footer";

export default function  PageContent({charactersRendering}) {
    return (
        <main>
            <Filter
                key = {nanoid()}
            />
            <div className ='character-container'>
                {charactersRendering}
            </div>
            <Pagination />
            <Footer />
        </main>
    )
}