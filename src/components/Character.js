import React from "react";
/*import logo from "../logo.svg"*/


export default function Character(props) {
    const avatarUrl = props.characterData[0].image
    let name = props.characterData[0].name
    return (
        <section className="character-card">
            <div className="character-card__avatar">
                <img src={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"} alt='some text'/>
            </div>
            <h2>{name}</h2>
            <h3>Gender</h3>
            <h3>status: alive</h3>
        </section>
    )
}