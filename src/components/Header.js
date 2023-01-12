import React from "react"
import "./Header.css"
import book from "../Image/book.png"
import student from "../Image/student.png"
import transition from "../Image/transition.png"
import redbus from "../Image/redbus.png"
import rsm from "../Image/rsm.png"
import amazon from "../Image/amazon.png"
import super6 from "../Image/super6.png"
import mindtree from "../Image/mindtree.png"
import ms100 from "../Image/ms100.png"
import bluebrain from "../Image/blue-brain.png"
import fork from "../Image/fork.png"
import cohesity from "../Image/cohesity.png"
import ibm from "../Image/ibm.png"
import geekyants from "../Image/geekyants.png"
import soprabankingsoftware from "../Image/sopra-banking-software.png"



function Header() {
    return (
        <>
            <div className="Header">
                <div className="header">
                    <h1 className="header_heading">“Pure Hardwork, No Shortcuts!”</h1>

                </div>
                <hr className="line" />
                <div className="header_mid">
                    <div className="header_top">
                        <img src={book} alt="..." className="book_img" /> <br />
                        <span className="book_price">600+</span><br />
                        <span className="book_text">Different Courses</span>
                    </div>
                    <div className="header_middle">
                        <img src={student} alt="..." className="book_img" /> <br />
                        <span className="book_price">500000+</span><br />
                        <span className="book_text">Students Enrolled</span>
                    </div>
                    <div className="header_bottom">
                        <img src={transition} alt="..." className="book_img" /> <br />
                        <span className="book_price">10000+</span><br />
                        <span className="book_text">Successful Transition</span>
                    </div>
                </div>

            </div>
            <div className="Header_Bottom">
                <div className="headeer">
                    <h1>Our Achiever’s Work with</h1>

                    <div className="scroll">
                        <img src={amazon} alt="..." style={{ width: '100px' }} />
                        <img src={bluebrain} alt="..." style={{ width: '100px' }} />
                        <img src={cohesity} alt="..." style={{ width: '100px' }} />
                        <img src={fork} alt="..." style={{ width: '100px' }} />
                        <img src={geekyants} alt="..." style={{ width: '100px' }} />
                        <img src={ibm} alt="..." style={{ width: '100px' }} />
                        <img src={mindtree} alt="..." style={{ width: '100px' }} />
                        <img src={ms100} alt="..." style={{ width: '100px' }} />
                        <img src={redbus} alt="..." style={{ width: '100px' }} />
                        <img src={rsm} alt="..." style={{ width: '100px' }} />
                        <img src={soprabankingsoftware} alt="..." style={{ width: '100px' }} />
                        <img src={super6} alt="..." style={{ width: '100px' }} />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Header