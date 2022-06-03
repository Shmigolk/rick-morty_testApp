import React from 'react';
import {nanoid} from "nanoid";

function Filter({filter, nameFilter}) {

    const {name, gender, status} = filter

    const genders = ["Male", "Female", "Unknown", "All"].map( gender => <option key = {nanoid()} value={gender}>{gender}</option>)
    const statuses = ["Alive", "Dead", "Unknown", "All"].map( status => <option key = {nanoid()} value={status}>{status}</option>)

    return (
        <div className= "filter-component">
                <input
                       className="filter-component__selector"
                       type="text"
                       placeholder='input name'
                       name='name'
                       value={name}
                       onChange={nameFilter}
                       autoFocus
                       />

            <div className="filter-component__selector"> <p>Gender</p>
                <select value={gender}
                        onChange={nameFilter}
                        name = "gender">
                   {genders}
                </select>
            </div>

            <div className="filter-component__selector">
            <p>Status</p>
                <select value={status}
                        onChange={nameFilter}
                        name="status">
                    {statuses}
                </select>
            </div>
        </div>
    )
}

export default Filter;
