import React from "react"
import './TestSeries.css'
import Test from "../Test"


function TestSeries() {
    return (
        <>
            <div className="Test">
                <h1>Test Program</h1>
                <p style={{ color: 'black', fontWeight: '700' }}>Get your program with live "instructor led" learning.</p>
            </div>

            <div className="test">
                {
                    Test.map((val) => {
                        return (
                            <>
                                <div className="Test_Card">
                                    <div className="Test_card">

                                        <img src={val.image} alt="..." className="Test_img" />
                                        <div className="Live_text">
                                            <span className="map_text">{val.Des}</span><br />

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

export default TestSeries