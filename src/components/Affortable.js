import React from "react"
import "./Affortable.css"
import Affortabl from "../Affortabl"

function Affortable() {
    return (
        <>
            <div className="Table">
                <h1>Affordable Programs</h1>
                <p style={{ color: 'black', fontWeight: '700' }}>Find your favourite courses in pocket-friendly ways.</p>
            </div>

            <div className="table">
                {
                    Affortabl.map((val) => {
                        return (
                            <>
                                <div className="Table_Card">
                                    <div className="Table_card">

                                        <img src={val.image} alt="..." className="Table_img" />
                                        <div className="Live_text">
                                            <span className="map_text">{val.Des}</span><br />
                                            <span className="map_text">{val.price}</span><br />

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

export default Affortable