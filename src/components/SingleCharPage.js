import React from 'react'

function SingleCharPage(props) {

    const avatarUrl = props.characterData.image
    const name = props.characterData.name
    const gender = props.characterData.gender
    const status = props.characterData.status
    const location = props.characterData.location.name
    const backToMain = props.backToMain

    return (
        <section className="character-card">
            <div className="character-card__avatar">
                <img src={avatarUrl} alt='some text'/>
            </div>
            <h2>{name}</h2>
            <h3>{gender}</h3>
            <h3>{status}</h3>
            <h3>Location: {location}</h3>
            <button className="character-card__btn" onClick={backToMain}>Main page</button>
        </section>
    )
}

export default SingleCharPage