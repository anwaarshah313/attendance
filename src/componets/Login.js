import React from 'react'
import "./login.css"
import { NavLink } from 'react-router-dom';
import { AiOutlineTeam, AiFillGoogleCircle } from "react-icons/ai";
import { BiLockOpen } from "react-icons/bi";
import { FcOk,FcMindMap } from "react-icons/fc";
export default function Login() {
    return (
        <>
            <div className='out-div'>
                <div className='background'>

                    <div className='radius'>


                        {/* bootsrtap grid  */}
                        <div className="row">
                            <div className="col-sm-7">
                                <img className='image' src="images/leptop.png" alt="" />
                            </div>
                            <div className="col-sm-5">

                                {/* login form div */}
                                <div className='login-out-div'>
                                    {/* heading div */}
                                    <div className='heading'>
                                        <h3 className='font'>
                                        <span className='icon-size'> <FcMindMap/></span>
                                            Waspak.co
                                        </h3>
                                        <h6>
                                        <span className='icon-size'> <FcOk/></span>
                                            Welcome back to our channel !
                                        </h6>
                                    </div>
                                    {/* input fields div */}
                                    <div className='input-div'>
                                        <span className='icon-size'> <AiOutlineTeam /></span>
                                        <input type="text" placeholder='Username' /><hr /><br />
                                        <span className='icon-size'> <BiLockOpen /></span>
                                        <input type="password" placeholder='Password' /><hr />
                                    </div>
                                    {/* button div */}
                                    <div className='btn-out-div'>
                                        <button className='btn-login'>
                                            Login
                                        </button><br /><br />
                                        <button className='btn-google'>
                                            <span className='icon-size'> <AiFillGoogleCircle /> </span>   Continue with Google
                                        </button>
                                    </div>

                                    {/* Sign Up link button */}
                                    <div className='link-out-div'>
                                        <span>Or Sign Up Using?</span><span> <NavLink className="nav-bar-link" to="signup">Sign Up</NavLink></span>

                                    </div>


                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
