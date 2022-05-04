import React from 'react'
import SearchBar from './components/SearchBar'
import Home from './components/Home'
import Searched from './components/Searched'
import Details from './components/details/Details'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './css/style.scss'
import './css/bootstrap.min.css'


const RouteApp = () => useRoutes([
    { path: "/", element: <Home /> },
    { path: "/search/:id", element: <Searched /> },
    { path: "/details/:game", element: <Details /> }
]);

const App = (): JSX.Element =>
{
    return (
        <div>
            <BrowserRouter>
                <SearchBar></SearchBar>
                <RouteApp></RouteApp>
            </BrowserRouter>
        </div>
    )
}

export default App;