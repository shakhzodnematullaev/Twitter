import "./explore.scss"
import {Link, NavLink} from "react-router-dom"
import useAuth from "../../hooks/useAuth"

import logo from "../../assets/photos/logo.png"
import avatar from "../../assets/photos/user.jpg"
import home from "../../assets/photos/home.png"
import sharpFill from "../../assets/photos/sharpFill.png"
import bell from "../../assets/photos/bell.png"
import message from "../../assets/photos/message.png"
import bookmarks from "../../assets/photos/bookmarks.png"
import lists from "../../assets/photos/lists.png"
import profileOutline from "../../assets/photos/profileOutline.png"
import more from "../../assets/photos/more.png"
import mushtariy from "../../assets/photos/mushtariy.png"
import shuhrat from "../../assets/photos/shuhrat.png"

function Explore () {
    const [token] = useAuth(true)
        
    return (
        <div className="profile-container">
            <div className="menu-box">
                <img src={logo} alt="logo" />

                <ul className="menu-list">
                    <li className="m-item">
                        <img src={home} alt="home" />
                        <NavLink className="menu-link" to="/" >Home</NavLink>
                    </li>
                    <li className="m-item">
                        <img src={sharpFill} alt="sharpFill" />
                        <NavLink className="menu-link" to="/explore" activeClassName="menu-link--active">Explore</NavLink>
                    </li>
                    <li className="m-item">
                        <img src={bell} alt="bell" />
                        <NavLink className="menu-link" to="/notifications" activeClassName="menu-link--active">Notifications</NavLink>
                    </li>
                    <li className="m-item">
                        <img src={message} alt="message" />
                        <NavLink className="menu-link" to="/messages" activeClassName="menu-link--active">Messages</NavLink>
                    </li>
                    <li className="m-item">
                        <img src={bookmarks} alt="bookmarks" />
                        <NavLink className="menu-link" to="/bookmarks" activeClassName="menu-link--active">Bookmarks</NavLink>
                    </li>
                    <li className="m-item">
                        <img src={lists} alt="lists" />
                        <NavLink className="menu-link" to="/lists" activeClassName="menu-link--active">Lists</NavLink>
                    </li>
                    <li className="m-item">
                        <img src={profileOutline} alt="profileOutline" />
                        <NavLink className="menu-link" to="/profile" activeClassName="menu-link--active">Profile</NavLink>
                    </li>
                    <li className="m-item">
                        <img src={more} alt="more" />
                        <NavLink className="menu-link" to="/more" activeClassName="menu-link--active">More</NavLink>
                    </li>
                </ul>
                <button className="t-btn"><Link className="tweet-link" to="/">Tweet</Link></button>
                <div className="profile-box">
                    <img src={avatar} alt="avatar" width="50"/>
                    <div>
                        <p className="profilName"><strong>{token.username}</strong></p>
                        <Link to="/profile" className="link">@{token.username}</Link>
                    </div>
                    <p className="dots">...</p>
                </div>
            </div>
            
            <div className="tw-box">
                <h1 className="heading">Explore</h1>
            </div>

            <div className="search-box">
                <form className="search-form">
                    <input type="text" placeholder="Search Twitter" />
                </form>
                <div className="trend-box">
                    <h3>Trends for you</h3>
                    <ul>
                        <li>
                            <div>
                                <p>Trending in Germany</p>
                                <h4>Revolution</h4>
                                <p>50.4K Tweets</p>
                            </div>
                            <p>...</p>
                        </li>
                        <li>
                            <div>
                                <p>Trending in Germany</p>
                                <h4>Revolution</h4>
                                <p>50.4K Tweets</p>
                            </div>
                            <p>...</p>
                        </li>
                        <li>
                            <div>
                                <p>Trending in Germany</p>
                                <h4>Revolution</h4>
                                <p>50.4K Tweets</p>
                            </div>
                            <p>...</p>
                        </li>
                    </ul>
                    <p className="show-btn">Show more</p>
                </div>
                <div className="likes">
                    <h3>You might like</h3>
                    <ul className="like-list">
                        <li>
                            <img src={mushtariy} alt="mushtariy" />
                            <div>
                                <h4>Mushtariy</h4>
                                <p className="link">@Mushtar565266</p>
                            </div>
                            <button>Follow</button>
                        </li>
                        <li>
                            <img src={shuhrat} alt="shuhrat" />
                            <div>
                                <h4>Shuhratbek</h4>
                                <p className="link">@mrshukhrat</p>
                            </div>
                            <button>Follow</button>
                        </li>
                    </ul>
                    <p className="show-btn">Show more</p>
                </div>
                <ul className="terms-list">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Imprint</li>
                    <li>Ads Info</li>
                    <li>More...</li>
                    <li>© 2021 Twitter, Inc.</li>
                </ul>
            </div>
        </div>
    )
}

export default Explore