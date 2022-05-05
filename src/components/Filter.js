import React from 'react';

function Filter(props) {

    const name = props.filter.name
    const gender = props.filter.gender
    const status = props.filter.status
    const statuses = props.statuses
    const genders = props.genders

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
                <select value={status}
                        onChange={props.nameFilter}
                        name="status">
                    {statuses}
                </select>
            </label>

        </div>
    )
}

export default Filter;
