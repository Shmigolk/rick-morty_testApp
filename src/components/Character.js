import React from "react";

export default function Character(props) {

    const {image, name, gender, status} = props.characterData

    return (
            <section className="character-card character-card__hover"
            onClick={props.showCharPage}>
                <div className="character-card__avatar">
                    <img src={image} alt='some text' className='card-image'/>
                </div>
                <div className= 'character-cart-text'>
                    <h2>{name}</h2>
                    <p>Gender: {gender}</p>
                    <p>Status: {status}</p>
                </div>
            </section>
    )
}