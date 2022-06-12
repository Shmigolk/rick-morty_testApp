import React, {useContext} from 'react'
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useParams} from "react-router-dom"
import {Context} from "../Context";

function SingleCharPage() {
    const {characterId} = useParams()

    console.log('SingleCharPage characterId: ', characterId)
    const [singlePageData, setSinglePageData] = React.useState(null)
    // const singlePageData = characters.find( character => character.id === Number(characterId))

    const {image, name, gender, status, location} = singlePageData || {}


    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => res.json())
            .then(data => {
                setSinglePageData(data)

            })
    }, [characterId])

    return (
        <main>
            {singlePageData && (
                <section className="single-character-card">
                    <h1>{name}</h1>
                    <div className="single-character-card__avatar">
                        <img src={image}
                             alt='some text'/>
                    </div>
                    <i className="fa-solid fa-house"/>
                    <p>Gender: {gender} / Status: {status} </p>
                    <p>Location: {location.name}</p>
                    <div className='home-icon-container'>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome}
                                             size="3x"
                                             className='home-icon'/>
                        </Link>
                    </div>
                </section>
            )}
        </main>
    )
}

export default SingleCharPage