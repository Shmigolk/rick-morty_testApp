import React from 'react';

function Filter(props) {

    return (
        <div filter-component>
            <input type="text"
                   className=''
                   placeholder='input name'
                   name='name'
                   />
            <label> Gender
            <select value="Gender">
                <option value="male">Male</option>
                <option value="male">Female</option>
                <option value="male">All</option>
            </select>
            </label>
        </div>
    )
}

export default Filter;