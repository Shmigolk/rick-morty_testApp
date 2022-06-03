import React from 'react'

function SingleCharPage({characterData, backToMain}) {
    const {image, name, gender, status, location} = characterData

    const locationName = location.name

    return (
        <section className="single-character-card">
            <h1>Name: {name}</h1>
            <div className="single-character-card__avatar">
                <img src={image} alt='some text'/>
            </div>
            <i className="fa-solid fa-house"/>
            <p>Gender: {gender} / Status: {status} </p>
            <p>Location: {locationName}</p>
            <button className="character-card__btn" onClick={backToMain}>Main page</button>
        </section>
    )
}

export default SingleCharPage