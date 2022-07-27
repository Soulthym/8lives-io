import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import './styles/main.scss'
import 'animate.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BigCats from "./pages/BigCats/BigCats";
import LittleCats from "./pages/LittleCats/LittleCats";

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={BigCats} />
                <Route exact path="/littlecats" component={LittleCats} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Routing/>,
    document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
