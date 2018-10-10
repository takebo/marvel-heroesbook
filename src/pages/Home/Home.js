import React, {Component} from 'react'
import axios from 'axios'
import {marvelApi as config} from '../../config/config'

import './Home.css'

import Footer from '../../components/Footer/Footer'
import Heroes from '../../components/Heroes/Heroes'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: [],
      params: {
        limit: 18,
        offset: 0
      }
      // nameStartsWith: null, // Return characters with names that begin with the specified string (e.g. Sp)
      // orderBy: 'name' // name, modified, -name, -modified
    }
  }

  getHeroes = params => {
    axios
      .get(config.baseUrl, {
        params: {
          ...this.state.params,
          ts: config.ts,
          apikey: config.apikey,
          hash: config.hash
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
    this.getHeroes()
  }

  render() {
    return (
      <>
        <Heroes data={this.state.heroes} />
        <Footer />
      </>
    )
  }
}

export default Home
