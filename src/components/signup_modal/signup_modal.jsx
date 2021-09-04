import "./signup_modal.scss"
import logo from "../../assets/photos/logo.png"


function Modal() {
    return (
        <div className="modal">
            <div className="modal-content">
                <img className="logo" src={logo} alt="logo" />
                <h1>Create an account</h1>
                <form className="input-form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone number"/>
                </form>

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
                <button className="next-btn">Next</button>
            </div>
        </div>
    )
}

export default Modal