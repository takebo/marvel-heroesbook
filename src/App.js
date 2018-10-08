import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import List from './List/List'
import Card from './Card/Card'

class AppList extends Component {
  constructor() {
    super()
    this.state = {
      heroes: [],
      params: {
        limit: 18,
        offset: 0,
        name: null, // Return only characters matching the specified full character name (e.g. Spider-Man)
        nameStartsWith: null, // Return characters with names that begin with the specified string (e.g. Sp)
        modifiedSince: null, // Return only characters which have been modified since the specified date
        comics: null, // Number (accepts a comma-separated list of ids)
        series: null, // Number (accepts a comma-separated list of ids)
        events: null, // Number (accepts a comma-separated list of ids)
        stories: null, // Number (accepts a comma-separated list of ids)
        orderBy: 'name' // name, modified, -name, -modified
      }
    }
  }

  pagePrev = () => {
    this.setState(prevState => ({
      params: {
        ...prevState.params,
        offset: prevState.params.offset - 30
      }
    }))
    console.log('prev: ', this.state.params.offset)

    this.api(this.state.params)
  }

  pageNext = () => {
    this.setState(prevState => ({
      params: {
        ...prevState.params,
        offset: prevState.params.offset + 30
      }
    }))
    console.log('next: ', this.state.params.offset)

    this.api(this.state.params)
  }

  api(params) {
    const apiUrl = 'http://gateway.marvel.com/v1/public/characters'
    const publickey = '0ae171b5759a095e9a68bb5b446a9674'
    let heroes = []
    axios
      .get(apiUrl, {
        params: {
          ts: 'takebo',
          hash: '46c80334dd17064c5fe26fb8b536dce4',
          apikey: publickey,
          ...params
        }
      })
      .then(res => {
        console.log('res: ', res)

        heroes = res.data.data.results.map(hero => {
          return (
            <Card
              key={hero.id}
              name={hero.name}
              thumbnail={
                hero.thumbnail.path +
                '/portrait_uncanny.' +
                hero.thumbnail.extension
              }
            />
          )
        })
        this.setState({
          heroes
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.api(this.state.params)
  }

  render() {
    return (
      <div>
        <List>{this.state.heroes}</List>
        <div className="pagination">
          <button name="prev" onClick={this.pagePrev}>
            prev
          </button>
          <button name="next" onClick={this.pageNext}>
            next
          </button>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppList />
        <Footer copyright="© 2018 MARVEL" />
      </div>
    )
  }
}

export default App
