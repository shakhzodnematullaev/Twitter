import "./feed.scss"
import {Link, NavLink} from "react-router-dom"
import useAuth from "../../hooks/useAuth"

import logo from "../../assets/photos/logo.png"
import avatar from "../../assets/photos/user.jpg"
import homeFill from "../../assets/photos/homeFill.png"
import sharp from "../../assets/photos/sharp.png"
import bell from "../../assets/photos/bell.png"
import message from "../../assets/photos/message.png"
import bookmarks from "../../assets/photos/bookmarks.png"
import lists from "../../assets/photos/lists.png"
import profileOutline from "../../assets/photos/profileOutline.png"
import more from "../../assets/photos/more.png"
import mushtariy from "../../assets/photos/mushtariy.png"
import shuhrat from "../../assets/photos/shuhrat.png"
import comment from "../../assets/photos/comment.png"
import retweet from "../../assets/photos/retweet.png"
import like from "../../assets/photos/like.png"
import share from "../../assets/photos/share.png"
import stat from "../../assets/photos/stat.png"
import retweetGreen from "../../assets/photos/retweetGreen.png"
import likeFill from "../../assets/photos/likeFill.png"
import shashlik from "../../assets/photos/shashlik.png"
import designsta from "../../assets/photos/designsta.png"
import clout from "../../assets/photos/clout.png"
import creat from "../../assets/photos/creat.png"
import customize from "../../assets/photos/Customize.png"
import image from "../../assets/photos/image.png"
import gif from "../../assets/photos/gif.png"
import stats from "../../assets/photos/stats.png"
import smile from "../../assets/photos/smile.png"
import schedule from "../../assets/photos/schedule.png"
import { useRef, useState } from "react"

function Feed () {
    const [token] = useAuth(true)
    const tweetBtn = useRef(null)
    const tweetText = useRef(null)

    const [tweets, setTweets] = useState(
        JSON.parse(window.localStorage.getItem("tweets")) || []
    )
        
    return (
        <div className="profile-container">
            <div className="menu-box">
                <img src={logo} alt="logo" />

                <ul className="menu-list">
                    <li className="m-item">
                        <img src={homeFill} alt="homeFill" />
                        <NavLink className="menu-link" to="/" activeClassName="menu-link--active">Home</NavLink>
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

                <div className="home-box">
                    <h3>Home</h3>
                    <img src={customize} alt="customize" />
                </div>

                <div className="message-box">
                    <img className="avatar-img" src={avatar} alt="avatar" width="55" />
                    <div className="m-box">
                        <form onChange={() => {
                            tweetBtn.current.style.opacity = 1;
                            tweetBtn.current.disabled = false;
                        }} onSubmit={(e) => {
                            e.preventDefault();
                            
                            const newTweet = {
                                id: tweets.length + 1 || 1,
                                title: tweetText.current.value,
                            }

                            setTweets([...tweets, newTweet])
                            window.localStorage.setItem("tweets", JSON.stringify([newTweet, ...tweets ]))

                            tweetText.current.value = ""
                            
                        }}>
                            <input ref={tweetText} className="tweet-text" placeholder="What's happening" />
                            <div className="messaging-box">
                                <ul className="type-message-list">
                                    <li>
                                        <img src={image} alt="img" />
                                    </li>
                                    <li>
                                        <img src={gif} alt="ret" />
                                    </li>
                                    <li>
                                        <img src={stats} alt="stats" />
                                    </li>
                                    <li>
                                        <img src={smile} alt="smile" />
                                    </li>
                                    <li>
                                        <img src={schedule} alt="schedule" />
                                    </li>
                                </ul>
                                <button ref={tweetBtn} type="submit" className="t-btn" disabled>Tweet</button>
                            </div>
                        </form>
                    </div>
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

                <div className="first-tweet-box">
                    <img src={designsta} alt="designsta" width="55" />
                    <div>
                        <div className="user-box">
                            <h4>Designsta</h4>
                            <p>@inner • 25m</p>
                        </div>
                        <p className="tweet-text">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
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

                <div className="second-tweet-box">
                    <img src={clout} alt="clout" width="55" />
                    <div>
                        <div className="user-box">
                            <h4>cloutexhibition</h4>
                            <p>@RajLahoti • 22m</p>
                        </div>
                        <p className="tweet-text">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
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
                    <img src={creat} alt="creat" width="55" />
                    <div>
                        <div className="user-box">
                            <h4>CreativePhoto</h4>
                            <p>@cloutexhibition • 1h</p>
                        </div>
                        <p className="tweet-text">Обетда..... <br />
                        Кечиринглар</p>
                        <img className="shashlik" src={shashlik} alt="shashlik" width="500"/>
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

export default Feed