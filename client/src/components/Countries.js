import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';

const Countries = (props) => {

    const [totals, setTotals] = useState({
        us : 0,
        brazil: 0,
        france: 0,
        sweden: 0,
        netherlands: 0,
        australia: 0,
        chile: 0,
        england: 0,
        italy: 0,
        germany: 0,
        canada: 0,
        spain: 0,
        norway: 0,
        argentina: 0
    })

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

    const adder = (arr) => {
        let num = 0;
        
        arr.forEach(element => {
            num += element.searches
        });

        if ( arr[0].country === "United States") {
            setTotals({us : num})
        }
        if ( arr[0].country === "Brazil") {
            setTotals({brazil : num})
        }
        
        
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <h1 onClick={() => adder(us)}>United States total searches: {totals.us}</h1>
                {us.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                        <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                        <div style={{width: '500px'}}>
                            <Progress
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={el.searches}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(brazil, brazil[0].country)}>Brazil total searches {totals.brazil}</h1>
                {brazil.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(france)}>France total searches {totals.france}</h1>
                {france.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(sweden)}>Sweden total searches {totals.sweden}</h1>
                {sweden.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(netherlands)}>Netherlands total searches {totals.netherlands}</h1>
                {netherlands.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(australia)}>Australia total seaches {totals.australia}</h1>
                {australia.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(chile)}>Chile total searches {totals.chile}</h1>
                {chile.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(england)}>England total searches {totals.england}</h1>
                {england.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(italy)}>Italy total searches {totals.italy}</h1>
                {italy.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(germany)}>Germany total searches {totals.germany}</h1>
                {germany.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(canada)}>Canada total searches {totals.canada}</h1>
                {canada.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(spain)}>Spain total searches {totals.spain}</h1>
                {spain.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(norway)}>Norway total searches {totals.norway}</h1>
                {norway.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
            <div>
                <h1 onClick={() => adder(argentina)}>Argentina total searches {totals.argentina}</h1>
                {argentina.map(el => (
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
                    <p key={el.id}>{el.name} was searched {el.searches} {el.searches > 1 ? 'times' : 'time'}</p>
                    <div style={{width: '500px'}}>
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={el.searches}
                        />
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Countries;