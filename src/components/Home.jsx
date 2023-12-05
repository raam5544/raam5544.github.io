import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
        const randInt = Math.floor(Math.random()*16)
        console.log(randInt)
        return (
            <div>This is Home:{data[randInt].text}</div>
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