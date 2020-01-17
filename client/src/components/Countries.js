import React from 'react';
import Country from './Country';

const Countries = (props) => {
    console.log(props.US)
    return (
        <div>
            <h1>United States</h1>
            {props.US.map(el => (
                <Country
                key={el.id} 
                el={el}
                />
            ))}
        </div>
    )
}

export default Countries;