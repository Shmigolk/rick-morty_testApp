import React from 'react';

function Filter(props) {
    const genders = props.genders.map( gender => <option value={gender}>{gender}</option>)
    const statuses = props.status.map( status => <option value={status}>{status}</option>)

    return (
        <div className= "filter-component">
            <input type="text"
                   className=''
                   placeholder='input name'
                   name='name'
                   />
            <label> Gender
            <select value="Gender">
                {genders}
            </select>
            </label>

            <label> Status
                <select value="Gender">
                    {statuses}
                </select>
            </label>

        </div>
    )
}

export default Filter;