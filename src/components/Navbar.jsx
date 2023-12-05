import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='links'>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to='/News'>News</Link>
            </div>
        </div>
    )
}

export default Navbar