import React from 'react';

function Filter(props) {

    const name = props.filter.name
    const gender = props.filter.gender
    const genders = ["Male", "Female", "unknown", "All"].map( gender => <option value={gender}>{gender}</option>)
    const statuses = ["Alive", "Dead", "unknown", "All"].map( status => <option value={status}>{status}</option>)

    return (
        <div className= "filter-component">
            <input type="text"
                   className=''
                   placeholder='input name'
                   name='name'
                   value={name}
                   onChange={props.nameFilter}
                   />

            <label> Gender
                <select value={gender}
                        onChange={props.nameFilter}
                        name = "gender">
                   {genders}
                </select>
            </label>

            <label> Status
                <select value={statuses}
                        onChange={props.nameFilter}
                        name="status">
                    {statuses}
                </select>
            </label>

        </div>
    )
}

export default Filter;
