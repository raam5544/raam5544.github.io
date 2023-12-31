import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';


function News() {

    const [data, setData] = useState(null)

    const [select, setSelect] = useState('world')

    const [subselect, setSubselect] = useState('')

    const fetchData = async () => {
        const apiKey = 'w6sAzkY0ubu4s1suvPVMkGwlegA3FxGF'
        const url = `https://api.nytimes.com/svc/topstories/v2/${select}.json?api-key=${apiKey}`
        const response = await fetch(url)
        const fetchedData = await response.json()
        console.log(fetchedData)
        setData(fetchedData)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [select])

    useEffect(() => {
        fetchData()
    }, [subselect])

    const clickMe = () => {
        fetchData()
    }

    const handleSelect = (event) => {
        let newValue = event.target.value
        setSelect(newValue)
        setSubselect('')
    }
    
    const handleSubSelect = (event) => {
        let newValue = event.target.value
        setSubselect(newValue)
    }



    const loaded = () => {
        return (
            <div className='newsGrandparent'>
                <div className='newsSelectionParent'>
                    <div className='newsSelection'>
                        <label><h3>Categories</h3></label>
                        <select onChange={handleSelect}>
                            <option value="world">World</option>
                            <option value="arts">Arts</option>
                            <option value="home">Home</option>
                            <option value="us">US</option>
                            <option value="business">Business</option>
                            <option value="fashion">Fashion</option>
                        </select>
                    </div>
                    <div className='newsSelection'>
                        <label><h4>Subsection</h4></label>
                        <select name="" id="" onChange={handleSubSelect}>
                            {data.results.map((j) => {
                                return (
                                    <option value={j.subsection}>{j.subsection}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className='newsParent'>
                    {data.results.map((f, i) => {
                        if (f.multimedia === null) {
                            return (<div></div>)
                        } else if (subselect===f.subsection || subselect==='') {
                            return (
                                <div key={i}>
                                    <a href={f.url} target='_blank'>
                                        <div className='thumpCont'>
                                            <img id='thumpNail' src={f.multimedia[0].url} />
                                            <h4 id='thumpNailTitle'>{f.title}</h4>
                                        </div>
                                    </a>
                                </div>
                            )
                        }

                    })}
                </div>
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