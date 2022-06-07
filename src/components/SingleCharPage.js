import React from 'react'
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"

function SingleCharPage({characterData, backToMain}) {
    const {image, name, gender, status, location} = characterData

    const locationName = location.name

    return (
        <main>
            <section className="single-character-card">
                <h1>{name}</h1>
                <div className="single-character-card__avatar">
                    <img src={image} alt='some text'/>
                </div>
                <i className="fa-solid fa-house"/>
                <p>Gender: {gender} / Status: {status} </p>
                <p>Location: {locationName}</p>
                <div className='home-icon-container'>
                    <Link to={"home"}>
                        <FontAwesomeIcon icon={faHome} size="3x" onClick={backToMain} className='home-icon'/>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default SingleCharPage