import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='links'>
            <img src='https://bestoflife.com/wp-content/uploads/2022/09/BOL_long_nocircle-1.webp' />
            <div className='linkChild'>
                <div>
                    <Link to="/"><h3>Home</h3></Link>
                </div>
                <div>
                    <Link to='/News'><h3>News</h3></Link>
                </div>
                <div>
                    <Link to='/News'><h3>Weather</h3></Link>
                </div>
                <div id='signInBar'>
                    <img id='signInlogo' src="data:image/jpeg;base64,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" alt="" />
                    <p>Sign In</p>
                    <img id='signInlogo' src='https://cdn-icons-png.flaticon.com/512/8819/8819487.png' />
                    <img id='blockLogo' src="https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png" alt="" />
                    <p>Join Personal App® Insiders</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar