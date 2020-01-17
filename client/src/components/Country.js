import React from 'react';

const Country = (props) => {
    console.log(props.el)
    return (
        <div>
            <p>Name: {props.el.name} searches: {props.el.searches} </p>
        </div>
    )
}

export default Country;