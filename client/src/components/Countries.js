import React, { useState, useEffect } from 'react';

const Countries = (props) => {

    let us = props.data.filter(el => el.country === 'United States')
    let brazil = props.data.filter(el => el.country === 'Brazil')
    let france = props.data.filter(el => el.country === 'France')
    let sweden = props.data.filter(el => el.country === 'Sweden')
    let netherlands = props.data.filter(el => el.country === 'Netherlands')
    let australia = props.data.filter(el => el.country === 'Australia')
    let chile = props.data.filter(el => el.country === 'Chile')
    let england = props.data.filter(el => el.country === 'England')
    let italy = props.data.filter(el => el.country === 'Italy')
    let germany = props.data.filter(el => el.country === 'Germany')
    let canada = props.data.filter(el => el.country === 'Canada')
    let spain = props.data.filter(el => el.country === 'Spain')
    let norway = props.data.filter(el => el.country === 'Norway')
    let argentina = props.data.filter(el => el.country === 'Argentina')
    
    return (
        <div>
            <div>
                <h1>United States</h1>
                {us.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Brazil</h1>
                {brazil.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>France</h1>
                {france.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Sweden</h1>
                {sweden.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Netherlands</h1>
                {netherlands.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Australia</h1>
                {australia.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Chile</h1>
                {chile.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>England</h1>
                {england.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Italy</h1>
                {italy.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Germany</h1>
                {germany.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Canada</h1>
                {canada.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Spain</h1>
                {spain.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Norway</h1>
                {norway.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
            <div>
                <h1>Argentina</h1>
                {argentina.map(el => (
                    <p key={el.id}>{el.name} was searched {el.searches} times</p>
                ))}
            </div>
        </div>
    )
}

export default Countries;