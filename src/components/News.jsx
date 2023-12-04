import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';

function News() {

    const [data, setData] = useState(null)

    const fetchData = async () => {
        const apiKey = 'w6sAzkY0ubu4s1suvPVMkGwlegA3FxGF'
        const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
        const response = await fetch(url)
        const fetchedData = await response.json()
        console.log(fetchedData)
        setData(fetchedData)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const clickMe = () => {
        fetchData()
    }

    const loaded = () => {
        return (
                <div className='parentCont'>
                    {data.results.map((f) => {
                        return (
                            <div className='thumpCont'>
                                <img id='thumpNail' src={f.multimedia[2].url} />
                                <p id='thumpNailTitle'>{f.title}</p>
                            </div>

                        )
                    })}
                </div>
        )
    }

    const notLoaded = () => {
        return (
            <div>
                Hi Raam
                <button onClick={() => clickMe()}>Click Me</button>
            </div>
        )
    }

    return data ? loaded() : notLoaded()

};

export default News