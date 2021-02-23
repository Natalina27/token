import {book} from "./book";
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "../components/login/login";
import Home from "../components/home/home";

export const Routes = () => (
    <>
        <Switch>
            <Route exact path={book.root}>
                <Redirect to={book.login}/>
            </Route>
            <Route exact path={book.login}>
                <Login />
            </Route>

            <Route exact path={book.home}>
                <Home />
            </Route>
        </Switch>

    </>
)

