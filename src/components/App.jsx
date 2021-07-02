// import styles from "../styles/App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Main";

const nick = prompt("Podaj swój nick") || "Unknown";

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Chat nick={nick} />
                    </Route>
                    <Route exact path="/:room">
                        <Chat nick={nick} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
