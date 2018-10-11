import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {marvelApi as config} from '../../config/config'

import './Home.css'

import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'
import Heroes from '../../components/Heroes/Heroes'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: [],
      search: null
    }
  }

  getHeroes = () => {
    axios
      .get(config.baseUrl, {
        params: {
          limit: 18,
          offset: 0,
          orderBy: 'name',
          nameStartsWith: this.state.search,
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

  onChangeHandler = event => {
    this.setState({search: event.target.value ? event.target.value : null})
    if (!event.target.value) {
      this.getHeroes()
    }
  }
  onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      this.getHeroes()
    }
  }

  componentDidUpdate() {}

  componentDidMount() {
    this.getHeroes()
  }

  render() {
    return (
      <>
        <Header
          changed={this.onChangeHandler}
          pressed={this.onKeyPressHandler}
          search={this.searchHandler}
          keyword={this.props.searched}
        />
        <Heroes data={this.state.heroes} favorited={this.props.onFavorited} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    searched: state.search,
    favorited: state.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFavorited: data => dispatch({type: 'FAVORITE', hero: data}),
    onSearch: event => dispatch({type: 'SEARCH', search: event.target.value})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
