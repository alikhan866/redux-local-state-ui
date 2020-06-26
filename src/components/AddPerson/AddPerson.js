import React, { useState } from 'react';

import './AddPerson.css';

const addPerson = (props) => {

    const [details, setDetails] = useState({
        name: '',
        age: ''
    })

    function nameChangedHandler(event) {
        event.persist()
        setDetails((details) => ({
            ...details,
            name: event.target.value
        })
        )
    }

    function ageChangedHandler(event) {
        event.persist()
        setDetails((details) => ({
            ...details,
            age: event.target.value
        })
        )
    }

    return (
        <div className="AddPerson">
            <label className= "Label">
            <input
                className="Input"
                type="text"
                placeholder="Name"
                onChange={nameChangedHandler}
                value={details.name}
            />
            <input
                className="Input"
                type="number"
                placeholder="Age"
                onChange={ageChangedHandler}
                value={details.age}
            />
            <button
                className="Button"
                onClick={() => props.personAdded(details.name, details.age)}
            >Add Person</button>
            </label>
        </div>
    )

};

export default addPerson;