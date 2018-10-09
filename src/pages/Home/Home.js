import React, {Component} from 'react'
import axios from 'axios'

import './Home.css'

import Heroes from '../../components/Heroes/Heroes'

class Home extends Component {
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
        this.setState({
          heroes: res.data.data.results
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
    return <Heroes data={this.state.heroes} />
  }
}

export default Home
