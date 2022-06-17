import React, {useContext} from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import AllCharacters from "./AllCharacters";
import {Context} from "../Context";

export default function Favorites() {
    const {characters} = useContext(Context)

    const charactersRendering = characters.map(character => (
        <Character
            key={nanoid()}
            characterData={character}
        />
    ))

    return (
        <AllCharacters
            charactersRendering={charactersRendering}
        />
    )

}



