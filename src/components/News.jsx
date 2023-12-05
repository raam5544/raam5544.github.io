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
                    {data.results.map((f,i) => {
                        return (
                            <a href={f.url} target='_blank' key={i}>
                            <div className='thumpCont'>
                                <img id='thumpNail' src={f.multimedia[1].url} />
                                <h4 id='thumpNailTitle'>{f.title}</h4>
                            </div>
                            </a>
                        )
                    })}
                </div>
        )
    }

    const notLoaded = () => {
        return (
            <div>
                <h1>Loading Data</h1>
            </div>
        )
    }

    return data ? loaded() : notLoaded()

};

export default News