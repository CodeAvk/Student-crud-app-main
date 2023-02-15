import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Detail from './components/Details/Detail'
const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/detail/:id'>
                        <Detail/>
                    </Route>

                </Switch>

            </Router>

        </>
    )
}

export default App
