import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/styles/reset.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GlobalStyle from "./assets/styles/global";
import { ThemeProvider } from "styled-components";
import light from "./assets/styles/themes/light";
import dark from "./assets/styles/themes/dark";

import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import NavBar from "./components/navBar/NavBar";

function App() {

    const [darkTheme, setDarkTheme] = useState(false);


    return (
        <ThemeProvider theme={darkTheme ? dark : light}>
            <Router>
                <GlobalStyle />
                <NavBar />
                <Switch>
                    <Route path="/users" exact component={Users} />
                    <Route path="/users" exact component={Posts} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
