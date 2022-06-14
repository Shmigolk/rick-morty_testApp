import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../Context";

export default function Character(props) {
    // const {showCharacterPage} = useContext(Context)

    const {image, name, gender, status, id} = props.characterData

    return (
                <section
                    className="character-card character-card__hover"
                    // onClick={showCharacterPage}
                    >
                    <Link to={`/${id}`}>
                        <div className="character-card__avatar">
                            <img src={image} alt='some text' className='card-image'/>
                        </div>
                        <div className= 'character-cart-text'>
                            <h2>{name}</h2>
                            <p>Gender: {gender}</p>
                            <p>Status: {status}</p>
                        </div>
                    </Link>
                </section>
    )
}