import React, { useState } from 'react'
import "./signup.css"
import { NavLink } from 'react-router-dom';
import { AiOutlineTeam, AiFillGoogleCircle, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BiLockOpen, BiLock } from "react-icons/bi";
import { FcOk, FcMindMap } from "react-icons/fc";

export default function Signup() {


    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUser] = useState({
        fullName: "",
        name: "",
        email: "",
        password: "",
        repassword: "",


    });
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        setFormErrors(validate(user));
        // console.log(formErrors);
        const { fullName, name, email, password, repassword } = user;
        if (isSubmit) {

            const res = await fetch("https://attendance-8a3a1-default-rtdb.firebaseio.com//attendance.json",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            fullName,
                            name,
                            email,
                            password,
                            repassword,

                        }
                    )
                }
            )

            if (res) {
                setUser({
                    fullName: "",
                    name: "",
                    email: "",
                    password: "",
                    repassword: "",


                });

                alert("Data Store")

            }


        }
        else {

        }


    };

    const validate = (values) => {
        const errors = {}
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.fullName) {
            errors.fullName = "Name is required!"
        }
        if (!values.name) {
            errors.name = "Username is required!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        }
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!"
        }
        else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        if (!values.repassword) {
            errors.repassword = "Password is required!"
        }
        else if (values.repassword.length < 4) {
            errors.repassword = "Password must be more than 4 characters";
        } else if (values.repassword.length > 10) {
            errors.repassword = "Password cannot exceed more than 10 characters";
        }
    //    console.log(values.password);
    //    console.log(values.repassword);
       if ( values.password !== values.repassword)
       {
        errors.repassword = "both password should be same";
        errors.password = "both password should be same";
       }
       
        if (Object.keys(errors).length <= 0) {
            setIsSubmit(true);
            // console.log(errors)
            console.log('True')
        }
        else {
            setIsSubmit(false);
            console.log('False')
            // console.log(errors)
        }
        console.log(errors)
        return errors;

    };



    return (
        <>
            <div className='out-div'>
                <div className='background'>

                    <div className='radius'>


                        {/* bootsrtap grid  */}
                        <div className="row">
                            <div className="col-sm-7">
                                <img className='image' src="images/leptop1.jpg.png" alt="" />
                            </div>
                            <div className="col-sm-5">

                                {/* signup form div */}
                                <div className='signup-out-div'>
                                    {/* heading div */}
                                    <div className='heading'>
                                        <h3 className='font'>
                                            <span className='icon-size'> <FcMindMap /></span>
                                            Waspak.co
                                        </h3>
                                        <h6>
                                            <span className='icon-size'> <FcOk /></span>
                                            Welcome back to our channel !
                                        </h6>
                                    </div>
                                    {/* input fields div */}
                                    <form action="">
                                        <div className='signup-input-div'>


                                            <span className='icon-size'> <AiOutlineTeam /></span>
                                            <input type="text" id="fullName" name="fullName"
                                                value={user.fullName}
                                                onChange={getUserData}
                                                placeholder='Fullname' /><hr />
                                            <p className='error'>{formErrors.fullName}</p>


                                            <span className='icon-size'> <AiOutlineUser /></span>
                                            <input type="text" id="name" name="name"
                                                value={user.name}
                                                onChange={getUserData}
                                                placeholder='Username' /><hr />
                                            <p className='error'>{formErrors.name}</p>


                                            <span className='icon-size'> <AiOutlineMail /></span>
                                            <input type="email" id="email" name="email"
                                                value={user.email}
                                                onChange={getUserData}
                                                placeholder='Email' /><hr />
                                            <p className='error'>{formErrors.email}</p>


                                            <span className='icon-size'> <BiLockOpen /></span>
                                            <input type="password" id="password" name="password"
                                                value={user.password}
                                                onChange={getUserData}
                                                placeholder='Password' /><hr />
                                            <p className='error'>{formErrors.password}</p>


                                            <span className='icon-size'> <BiLock /></span>
                                            <input type="password" id="repasssword" name="repassword"
                                                value={user.repassword}
                                                onChange={getUserData}
                                                placeholder='Confirm Password' /><hr />
                                            <p className='error'>{formErrors.repassword}</p>


                                        </div>
                                    </form>
                                    {/* button div */}
                                    <div className='signup-btn-out-div'>
                                        <button onClick={postData} className='btn-login'>
                                            Sign Up
                                        </button><br /><br />
                                        <button className='btn-google'>
                                            <span className='icon-size'> <AiFillGoogleCircle /> </span>   Sign Up with Google
                                        </button>
                                    </div>

                                    {/* Sign Up link button */}
                                    <div className='link-out-div'>
                                        <span>Already a member?</span><span><NavLink className="nav-bar-link" to="/">Login</NavLink></span>

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
