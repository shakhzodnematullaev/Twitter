import "./login.scss"
import logo from "../../assets/photos/logo.png"
import { useRef } from "react";
import useAuth from "../../hooks/useAuth";


function Login () {
    const [setToken] = useAuth(false)

    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleLogin = e => {
        e.preventDefault();

        console.log(setToken)
        const obj = {
            username: usernameRef.current.value
        }
        setToken(obj)
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="" />
                <h1 className="login-text">Log in to Twitter</h1>

                <form className="login-form" onSubmit={handleLogin}>
                    <input ref={usernameRef} className="input" type="text" placeholder="Phone number, email address" required/>
                    <input ref={passwordRef} className="password" type="password" placeholder="password" required/>
                    <button className="login-btn" type="submit">Log in</button>
                    <div className="links">
                        <p className="links-text">Forgot password?</p>
                        <p className="links-text">Sign up to Twitter</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login