import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Favorites.css'

import Header from '../../components/Header/Header'
import Heroes from '../../components/Heroes/Heroes'

class Favorites extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heroes: this.props.favorited
    }
  }

  render() {
    let heroes = this.state.heroes.length ? (
      <Heroes data={this.state.heroes} favorited={this.props.onFavorited} />
    ) : (
      <h1 className="message warning">
        No <span className="text-red">❤</span> for heroes ;(
      </h1>
    )

    return (
      <>
        <Header />
        <div className="Favorites">{heroes}</div>
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
)(Favorites)
