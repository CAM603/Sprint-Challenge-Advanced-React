import React from 'react';

const Country = ({person}) => {
    console.log(person)

    return (
        <div>
            <p>{person.country}</p>
        </div>
    )
}

export default Country;