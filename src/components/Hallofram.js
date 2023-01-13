import React from "react"
import "./Hallofram.css"
import Data from "../Data"


function Hallofram() {
    return (
        <>

            <div className="hall">
                <h1 style={{ color: 'blue', padding: '40px' }}>Hall Of Fame</h1>
            </div>

            <div className="cardd">
                {
                    Data.map((value) => {
                        return (
                            <>
                                <div className="card">
                                    <div className="cart">

                                        <img src={value.image} alt="..." />

                                        <div className="wwe">
                                            <span className="map_text">{value.Name}</span><br />
                                            <span className="map_role">{value.role}</span> <br />
                                            <p className="map_des">{value.des}</p>
                                        </div>

                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Hallofram