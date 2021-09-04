import "./profile.scss"
import "../signup/signup.scss"
import {Link, NavLink} from "react-router-dom"
import { useRef, useState } from "react"
import useAuth from "../../hooks/useAuth"

import logo from "../../assets/photos/logo.png"
import avatar from "../../assets/photos/user.jpg"
import home from "../../assets/photos/home.png"
import sharp from "../../assets/photos/sharp.png"
import bell from "../../assets/photos/bell.png"
import message from "../../assets/photos/message.png"
import bookmarks from "../../assets/photos/bookmarks.png"
import lists from "../../assets/photos/lists.png"
import profile from "../../assets/photos/profile.png"
import more from "../../assets/photos/more.png"
import img1 from "../../assets/photos/img1.png"
import img2 from "../../assets/photos/img2.png"
import img3 from "../../assets/photos/img3.png"
import img4 from "../../assets/photos/img4.png"
import img5 from "../../assets/photos/img5.png"
import img6 from "../../assets/photos/img6.png"
import mushtariy from "../../assets/photos/mushtariy.png"
import shuhrat from "../../assets/photos/shuhrat.png"
import arrow from "../../assets/photos/arrow.png"
import oblojkaLogo from "../../assets/photos/js.jpg"
import location from "../../assets/photos/location.png"
import link from "../../assets/photos/link.png"
import born from "../../assets/photos/born.png"
import calendar from "../../assets/photos/calendar.png"
import pin from "../../assets/photos/pin.png"
import comment from "../../assets/photos/comment.png"
import retweet from "../../assets/photos/retweet.png"
import like from "../../assets/photos/like.png"
import share from "../../assets/photos/share.png"
import stat from "../../assets/photos/stat.png"
import retweetGreen from "../../assets/photos/retweetGreen.png"
import likeFill from "../../assets/photos/likeFill.png"
import tweetImg from "../../assets/photos/olmaxon.jpg"


function Profile () {
    const logout = useRef(null)
    const modal = useRef(null)
    const [token, setToken] = useAuth(true)

    const [tweets] = useState(
        JSON.parse(window.localStorage.getItem("tweets")) || []
    )

    return (
        <div className="profile-container" onKeyUp={(e) => {
            if (e.keyCode === 27) {
                logout.current.open = false
            }
        }}>
            <div className="menu-box">
                <img src={logo} alt="logo" />

                <ul className="menu-list">
                    <li className="m-item">
                        <img src={home} alt="home" />
                        <NavLink className="menu-link" to="/" >Home</NavLink>
                    </li>
                    <li className="m-item">
                        <img src={sharp} alt="sharp" />
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
                        <img src={profile} alt="profile" />
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
                
                <button className="t-btn" onClick={() =>{
                    logout.current.open = true
                }}>Log out</button>

                <dialog ref={logout} open={false}>
                    <div ref={modal} className="modal" onClick={(e) => {
                        if (e.target === modal.current) {
                            logout.current.open = false
                        }
                        
                    }} >
                        <div className="modal-content">
                            <img className="logo" src={logo} alt="logo" />
                            <h1>Log out @{token.username}?</h1>
                           
                            <p>This will only to this account, and you'll still be logged in to your other accounts.</p>
                            <div className="logout-box">
                                <button className="next-btn cancel-btn" onClick={(e) => {
                                    logout.current.open = false
                                }}>Cancel</button>
                                <button className="next-btn" onClick={() => {
                                    setToken(false)
                                }
                                }>Log out</button>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
            
            <div className="tw-box">
                <div className="head-box">
                    <img src={arrow} alt="arrow" />
                    <div>
                        <h3 className="profilName">{token.username}</h3>
                        <p>1,111 Tweets</p>
                    </div>
                </div>

                <div className="oblojka">
                    <img src={oblojkaLogo} alt="oblojkaLogo" />
                </div>

                <div className="avatar-box">
                    <img src={avatar} alt="avatar" width="100" />
                    <button>Edit profile</button>
                </div>

                <div className="data-box">
                    <h3 className="profilName">{token.username}</h3>
                    <Link to="/profile" className="link">@{token.username}</Link>
                    <p className="workplace">Full-stack developer at <span>Google</span></p>
                    <ul className="data-list">
                        <li>
                            <img src={location} alt="location" />
                            <p>Tashkent</p>
                        </li>
                        <li>
                            <img src={link} alt="link" />
                            <p>t.me/{token.username}</p>
                        </li>
                        <li>
                            <img src={born} alt="born" />
                            <p>Born February 31, 2022</p>
                        </li>
                        <li>
                            <img src={calendar} alt="calendar" />
                            <p>Joinded May 2042</p>
                        </li>
                    </ul>
                    <ul className="follow-list">
                        <li><span>67</span> <p>Following</p></li>
                        <li><span>47</span> <p>Followers</p></li>
                    </ul>
                    <ul className="tweets-list">
                        <li>Tweets</li>
                        <li>Tweets & replies</li>
                        <li>Media</li>
                        <li>Likes</li>
                    </ul>
                </div>

                <div className="pin-box">
                    <img src={pin} alt="pin" />
                    <p>Pinned Tweet</p>
                </div>

                <div className="first-tweet-box">
                    <img src={avatar} alt="avatar" width="55" />
                    <div>
                        <div className="user-box">
                            <h4 className="profilName">{token.username}</h4>
                            <p className="link">@{token.username} • Sep 1</p>
                        </div>
                        <p className="tweet-text">4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
                        <ul className="like-list">
                            <li>
                                <img src={comment} alt="comment" />
                                <p>10</p>
                            </li>
                            <li>
                                <img src={retweet} alt="ret" />
                                <p>1</p>
                            </li>
                            <li>
                                <img src={like} alt="like" />
                                <p>8</p>
                            </li>
                            <li>
                                <img src={share} alt="share" />
                            </li>
                            <li>
                                <img src={stat} alt="stat" />
                            </li>
                        </ul>
                    </div>
                    <p className="dots">...</p>
                </div>

                {tweets.length > 0 && (<ul>
                        {tweets.map((item) => (
                            <li className="first-tweet-box" key={item.id}>
                            <img src={avatar} alt="avatar" width="55" />
                            <div>
                                <div className="user-box">
                                    <h4 className="profilName">{token.username}</h4>
                                    <p className="link">@{token.username} • 1m</p>
                                </div>
                                <p className="tweet-text">{item.title}</p>
                                <ul className="like-list">
                                    <li>
                                        <img src={comment} alt="comment" />
                                    </li>
                                    <li>
                                        <img src={retweet} alt="ret" />
                                    </li>
                                    <li>
                                        <img src={like} alt="like" />
                                    </li>
                                    <li>
                                        <img src={share} alt="share" />
                                    </li>
                                    <li>
                                        <img src={stat} alt="stat" />
                                    </li>
                                </ul>
                            </div>
                            <p className="dots">...</p>
                      </li>        
                        ))}
                    </ul>
                    )}

                <div className="second-tweet-box">
                    <img src={avatar} alt="avatar" width="55" />
                    <div>
                        <div className="user-box">
                            <h4 className="profilName">{token.username}</h4>
                            <p className="link">@{token.username} • Sep 1</p>
                        </div>
                        <p className="tweet-text">Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 
                        <br /><br />
                        Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
                        <br /><br />
                        Gap faqat biznes trenerlar haqida emas.</p>
                        <ul className="like-list">
                            <li>
                                <img src={comment} alt="comment" />
                            </li>
                            <li>
                                <img src={retweetGreen} alt="ret" />
                                <p>5</p>
                            </li>
                            <li>
                                <img src={likeFill} alt="like" />
                                <p>9</p>
                            </li>
                            <li>
                                <img src={share} alt="share" />
                            </li>
                            <li>
                                <img src={stat} alt="stat" />
                            </li>
                        </ul>
                    </div>
                    <p className="dots">...</p>
                </div>

                <div className="third-tweet-box">
                    <img src={avatar} alt="avatar" width="55" />
                    <div>
                        <div className="user-box">
                            <h4 className="profilName">{token.username}</h4>
                            <p className="link">@{token.username} • Sep 1</p>
                        </div>
                        <p className="tweet-text">A bo'pti masakamasman</p>
                        <img className="mee" src={tweetImg} alt="mee" width="510"/>
                        <ul className="like-list">
                            <li>
                                <img src={comment} alt="comment" />
                                <p>10</p>
                            </li>
                            <li>
                                <img src={retweet} alt="ret" />
                                <p>1</p>
                            </li>
                            <li>
                                <img src={like} alt="like" />
                                <p>8</p>
                            </li>
                            <li>
                                <img src={share} alt="share" />
                            </li>
                            <li>
                                <img src={stat} alt="stat" />
                            </li>
                        </ul>
                    </div>
                    <p className="dots">...</p>
                </div>
                
            </div>

            <div className="search-box">
                <form className="search-form">
                    <input type="text" placeholder="Search Twitter" />
                </form>
                <ul className="photos-list">
                    <li>
                        <img src={img1} alt="img1" />
                    </li>
                    <li>
                        <img src={img2} alt="img2" />
                    </li>
                    <li>
                        <img src={img3} alt="img3" />
                    </li>
                    <li>
                        <img src={img4} alt="img4" />
                    </li>
                    <li>
                        <img src={img5} alt="img5" />
                    </li>
                    <li>
                        <img src={img6} alt="img6" />
                    </li>
                </ul>
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
            </div>
        </div>
    )
}

export default Profile