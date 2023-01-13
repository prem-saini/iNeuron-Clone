import React from "react";
import OneNeureo from "../OneNeureo";
import "./Neureo.css"

function Neureo() {
    return (
        <>
            <div className="Neureo">
                <h1>One Neureo</h1>
                <p style={{ color: 'black', fontWeight: '700' }}>Find your favourite courses in pocket-friendly ways.</p>
            </div>

            <div className="neureo">
                {
                    OneNeureo.map((val) => {
                        return (
                            <>
                                <div className="Neureo_Card">
                                    <div className="neureo_card">

                                        <img src={val.image} alt="..." className="Neureo_img" />
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

export default Neureo