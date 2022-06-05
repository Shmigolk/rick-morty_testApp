import React from 'react'
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SingleCharPage({characterData, backToMain}) {
    const {image, name, gender, status, location} = characterData

    const locationName = location.name

    return (
        <section className="single-character-card">
            <h1>{name}</h1>
            <div className="single-character-card__avatar">
                <img src={image} alt='some text'/>
            </div>
            <i className="fa-solid fa-house"/>
            <p>Gender: {gender} / Status: {status} </p>
            <p>Location: {locationName}</p>

            <FontAwesomeIcon icon={faHome} size="3x" onClick={backToMain} className='home-icon'/>
        </section>
    )
}

export default SingleCharPage