import React from "react";

export default function Character(props) {

    const avatarUrl = props.characterData.image
    const name = props.characterData.name
    const gender = props.characterData.gender
    const status = props.characterData.status

    return (
        <section className="character-card">
            <div className="character-card__avatar">
                <img src={avatarUrl} alt='some text'/>
            </div>
            <h2>{name}</h2>
            <h3>{gender}</h3>
            <h3>{status}</h3>
        </section>
    )
}