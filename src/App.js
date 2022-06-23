import CharactersFromAPI from './components/CharactersList'
import SingleCharPage from "./components/SingleCharPage";

import {Routes, Route} from "react-router-dom";


import React from "react";

export default function App(){

    return (
        <div>
            <Routes>
                <Route path={'/:characterId'} element={<SingleCharPage />} />
                <Route exact path={`/`} element={<CharactersFromAPI />} />
            </Routes>

        </div>)
}