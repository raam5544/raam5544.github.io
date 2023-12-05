import React from 'react'
import { useContext } from 'react'
import { bevContext } from '../App'

function Beverages() {
    const bevdetails = useContext(bevContext)
    return (
        <div className='bevCont'>
            <div className="bevTrack">
                {bevdetails.map((e, i) => {
                    return (
                        <div className="bevItem" key={i}>

                            <img id='bevItemImg' src={e.imgUrl} />

                            {/* <div>
                                {e.title}
                                {console.log(e)}
                            </div> */}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Beverages