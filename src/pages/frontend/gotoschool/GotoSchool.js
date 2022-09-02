import React from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../gotoschool/gotoschool.css"
import { TypeAnimation } from 'react-type-animation'
import logo from "../../assets/new.svg"
import basketball from "../../assets/basketball.svg"
import study from "../../assets/study.svg"
import location from "../../assets/location.svg"
export default function GotoSchool() {
    return (
        <>
            <div className='bgColor'>
                <div className='container min-vh-75 background'>
                    <div className='row'>
                        <div className="col-sm-12 col-md-4 col-lg-4 animation">
                            <h3>Are You Ready For</h3>

                            <TypeAnimation
                                sequence={['School', 3000, 'Study', 3000, 'Exam', 3000]}
                                //  Replacing previous Text
                                style={{ color: 'crimson', fontSize: "3em" }}
                                wrapper="h3"
                                repeat={Infinity}
                            />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className='landLogo'>
                                <img className='img' src={logo} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid studyContainer">
                <div className="row">
                    <div className="col-sm-4 col-lg-2 ">
                        <div className='studySvg'>
                            <img className='studyImg' src={study} alt="" />
                        </div>

                    </div>
                    <div className="col-sm-4 col-lg-6 mt-lg-5 ms-lg-5 ">
                        <p className='content mt-lg-5'>As summer winds down, its time to start prepping your young athlete to start a new school year; and for many that also means the return to fall sports. That’s a lot to plan for! So we’re here to help with resources you can use to plan for back-to-school and back-to-sport</p>
                    </div>
                    <div className="col-sm-4 col-lg-2 ">
                        <div className='studySvg'>
                            <img className='studyImg' src={basketball} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center title'>Everything You Need to Get Your Athlete Ready <br /> for the New School Year</h1>
                        <p className='text-center mt-3'>Check these out to make sure you (and your athlete) are prepped for the best school year and sports season yet:</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="John" style={{ width: "100%", height: "300px" }} />

                            <p className="title">CEO &amp; Founder, Example</p>
                            <p>Harvard University</p>

                            <p>
                                See More
                            </p>
                        </div>


                    </div>
                    <div className="col-6">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="John" style={{ width: "100%", height: "300px" }} />

                            <p className="title">CEO &amp; Founder, Example</p>
                            <p>Harvard University</p>

                            <p>
                                See More
                            </p>
                        </div>


                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="John" style={{ width: "100%", height: "300px" }} />

                            <p className="title">CEO &amp; Founder, Example</p>
                            <p>Harvard University</p>

                            <p>
                                See More
                            </p>
                        </div>


                    </div>
                    <div className="col-6">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="John" style={{ width: "100%", height: "300px" }} />

                            <p className="title">CEO &amp; Founder, Example</p>
                            <p>Harvard University</p>

                            <p>
                                See More
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-6 bgContent p-locate">
                        <h1 className='text-white'>Do you or someone you know need help managing their sports team or club?
                        </h1>
                        <p>Sign up for a 21-day free trial today.</p>
                        <button className='btn btn-success w-25'> Signup</button>
                    </div>
                    <div className="col-6 bgImg">
                    <div className='location'>
                                <img className='img' src={location} alt="" />
                            </div>
                    </div>
                </div>

            </div>
        </>
    )
} 