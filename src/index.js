import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Favorites from './pages/Favorites/Favorites'
import NotFound from './pages/NotFound/NotFound'

import './index.css'
import * as serviceWorker from './serviceWorker'

import reducer from './store/reducer'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hero/:id" component={Details} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
