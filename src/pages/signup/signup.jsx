import "./signup.scss"
import { Link } from "react-router-dom"

import logo from "../../assets/photos/logo.png"
import google from "../../assets/photos/google.png"
import apple from "../../assets/photos/apple.png"
import "../../components/signup_modal/signup_modal.scss"
import { useRef } from "react"
import useAuth from "../../hooks/useAuth"

function Signup () {
    const [setToken] = useAuth(false)

    const signup = useRef(null)
    const modal = useRef(null)
    const usernameRef = useRef()

    const handleSignup = e => {
        e.preventDefault();

        const obj = {
            username: usernameRef.current.value
        }

        setToken(obj)
    }

    return (
        <div className="signup-container" onKeyUp={(e) => {
            if (e.keyCode === 27) {
                signup.current.open = false
            }
        }}>
            <div className="signup-box">
                <div className="signup">
                    <img src={logo} alt="logo" />
                    <p className="happening-text">Happening now</p>
                    <h1>Join Twitter today</h1>
                    <ul className="join-list">
                        <li>
                            <img src={google} alt="google" />
                            <p>Sign up with Google</p>
                        </li>
                        <li>
                            <img src={apple} alt="apple" />
                            <p>Sign up with Apple</p>
                        </li>
                        <li>
                            <button onClick={() => {
                                signup.current.open = true;
                            }}>Sign up with phone or email</button>
                        </li>
                    </ul>
                    <p className="text">By singing up you agree to the <span className="span">Terms of Service</span> and <span className="span">Privacy Policy</span>, including <span className="span">Cookie Use</span>.</p>
                    <p className="text">Already have an account? <Link className="login-link" to="/login">Log in</Link></p>
                </div>
            </div>
            <ul className="terms-list">
                <li>About</li>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Ads info</li>
                <li>Blog</li>
                <li>Status</li>
                <li>Carrres</li>
                <li>Brand Resources</li>
                <li>Advertsing</li>
                <li>Marketing</li>
                <li>Twitter for Business</li>
                <li>Developers</li>
                <li>Directory</li>
                <li>Settings</li>
                <li>© 2021 Twitter, Inc.</li>
            </ul>
            <dialog ref={signup} open={false}>
                <div ref={modal} className="modal" onClick={(e) => {
                    if (e.target === modal.current) {
                        signup.current.open = false
                    }
                    
                }} >
                    <div className="modal-content">
                        <img className="logo" src={logo} alt="logo" />
                        <h1>Create an account</h1>
                        <form className="input-form" onSubmit={handleSignup}>
                            <input ref={usernameRef} type="text" placeholder="Name" required />
                            <input type="number" placeholder="Phone number" required/>
                            <p className="email-text">Use email</p>
                            <h3>Date of birth</h3>
                            <p className="date-text">
                            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
                            </p>

                            <form className="date-form">
                                <select className="month-select">
                                    <option>Month</option>
                                </select>
                                <select className="day-select">
                                    <option>Day</option>
                                </select>
                                <select className="year-select">
                                    <option>Year</option>
                                </select>
                            </form>
                            <button type="submit" className="next-btn">Next</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Signup;