import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Beverages from './Beverages'
import Footer from './Footer'
import Foods from './Foods'


function Home() {
    const [data, setData] = useState(null)
    const fetchData = async () => {
        const response = await fetch("https://type.fit/api/quotes")
        const fetchedData = await response.json()
        setData(fetchedData)
        console.log(fetchedData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const loaded = () => {
        const randInt = Math.floor(Math.random() * 16)
        console.log(randInt)
        return (
            <div className='homeParentDiv'>
                <div className='homeQuote'>
                    <img id='homeQuoteImg' src='https://i.pinimg.com/originals/87/6c/9f/876c9fb7eba555365922b5c283d69b8c.jpg'></img>
                    <p>"{data[randInt].text}"</p>
                </div>
                <div className='homeBev'>
                    <Beverages />
                    <Foods/>
                </div>
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return data ? loaded() : loading()
}

export default Home