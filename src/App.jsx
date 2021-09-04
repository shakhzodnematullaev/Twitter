import './App.scss';
import { Switch } from "react-router-dom"

import Profile from './pages/profile/profile';
import Feed from './pages/feed/feed';
import Login from './pages/login/login';
import Signup from "./pages/signup/signup"
import Explore from './pages/explore/explore';
import Notifications from './pages/notifications/notifications';
import Messages from './pages/messages/messages';
import Bookmarks from './pages/bookmarks/bookmarks';
import Lists from './pages/lists/lists';
import More from './pages/more/more';

import Private from "./routes/Private";
import Public from './routes/Public';

function App() {
    return (
        <div className="App">

            <Switch>
                <Public path="/signup" component={Signup} />

                <Public path="/login" component={Login} />

                <Private path="/profile" component={Profile} />

                <Private path="/" exact component={ Feed } />

                <Private path="/explore" component={ Explore } />

                <Private path="/notifications" component={ Notifications } />

                <Private path="/messages" component={ Messages } />

                <Private path="/bookmarks" component={ Bookmarks } />

                <Private path="/lists" component={ Lists } />

                <Private path="/more" component={ More } />

            </Switch>

        </div>
    );
}

export default App;
