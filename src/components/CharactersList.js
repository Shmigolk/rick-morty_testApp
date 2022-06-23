import React, {useContext} from "react";
import Character from "./Character";
import '../App.css';
import {nanoid} from "nanoid";
import PageContent from "./PageContent";
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
        <PageContent
            charactersRendering={charactersRendering}
        />
    )

}



