import CharactersFromAPI from './components/CharactersFromAPI'
import SingleCharPage from "./components/SingleCharPage";
import {Routes, Route} from "react-router-dom";
import {Context} from "./Context";
import React, {useContext} from "react";

export default function App(){
    const {currentPage} = useContext(Context)
    return (
        <div>
            <Routes>
                <Route path={'/:characterId'} element={<SingleCharPage />} />
                <Route exact path={`/`} element={<CharactersFromAPI />} />
            </Routes>
        </div>)
}