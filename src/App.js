import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/styles/reset.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GlobalStyle from "./assets/styles/global";
import { ThemeProvider } from "styled-components";
import blue from "./assets/styles/themes/blue";
import gray from "./assets/styles/themes/gray";

import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import NavBar from "./components/navBar/NavBar";
import ThemeButton from "./components/ThemeButton";

function App() {

    const [blueTheme, setBlueTheme] = useState(false);

    return (
        <ThemeProvider theme={blueTheme ? blue : gray}>
            <Router>
                <GlobalStyle />
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Users} />
                    <Route path="/users" exact component={Users} />
                    <Route path="/posts" exact component={Posts} />
                </Switch>
                <ThemeButton blueTheme={blueTheme} setBlueTheme={setBlueTheme} />
            </Router>
        </ThemeProvider>
    );
}

export default App;
