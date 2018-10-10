import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import NotFound from './pages/NotFound/NotFound'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hero/:id" component={Details} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
