import React, {Component} from 'react'
import axios from 'axios'
import {marvelApi as config} from '../../config/config'

import './Details.css'

import Header from '../../components/Header/Header'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      character: [],
      comics: [],
      events: [],
      series: [],
      stories: []
    }
  }

  apiHero(id) {
    const apiUrl = `${config.baseUrl}/${id}`
    const params = {
      ts: config.ts,
      hash: config.hash,
      apikey: config.apikey
    }

    axios
      .get(apiUrl, {
        params: {
          ...params
        }
      })
      .then(res => {
        this.setState({
          character: res.data.data.results
        })
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get(apiUrl + '/comics', {
        params: {
          ...params,
          limit: 8
        }
      })
      .then(res => {
        this.setState({
          comics: res.data.data.results
        })
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get(apiUrl + '/events', {
        params: {
          ...params,
          limit: 8
        }
      })
      .then(res => {
        this.setState({
          events: res.data.data.results
        })
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get(apiUrl + '/series', {
        params: {
          ...params,
          limit: 8
        }
      })
      .then(res => {
        this.setState({
          series: res.data.data.results
        })
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get(apiUrl + '/stories', {
        params: {
          ...params,
          limit: 8
        }
      })
      .then(res => {
        this.setState({
          stories: res.data.data.results
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.apiHero(this.props.match.params.id)
  }

  render() {
    const hero = this.state.character.map(hero => {
      return (
        <div key={hero.id} className="hero">
          <div className="hero-photo">
            <button className="favorite">❤</button>
            <img
              src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
              alt={hero.name}
            />
          </div>
          <div className="hero-info">
            <h1 className="hero-name">{hero.name}</h1>
            <div className="hero-description">
              {hero.description ? hero.description : 'No description.'}
            </div>
            <ul className="hero-urls">
              {hero.urls.map(url => (
                <li key={url.type}>
                  <a href={url.url} target="_blank" rel="noopener noreferrer">
                    {url.type}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    })

    const comics = this.state.comics.map(comic => {
      return (
        <li key={comic.resourceURI}>
          <a href={comic.resourceURI} target="_blank" rel="noopener noreferrer">
            <img
              src={
                comic.thumbnail.path +
                '/portrait_fantastic.' +
                comic.thumbnail.extension
              }
              className="photo"
              alt={comic.title}
            />
            <span className="title">{comic.title}</span>
          </a>
        </li>
      )
    })

    const events = this.state.events.map(event => {
      return (
        <li key={event.resourceURI}>
          <a href={event.resourceURI} target="_blank" rel="noopener noreferrer">
            <img
              src={
                event.thumbnail.path +
                '/portrait_fantastic.' +
                event.thumbnail.extension
              }
              className="photo"
              alt={event.title}
            />
            <span className="title">{event.title}</span>
          </a>
        </li>
      )
    })

    const series = this.state.series.map(serie => {
      return (
        <li key={serie.resourceURI}>
          <a href={serie.resourceURI} target="_blank" rel="noopener noreferrer">
            <img
              src={
                serie.thumbnail.path +
                '/portrait_fantastic.' +
                serie.thumbnail.extension
              }
              className="photo"
              alt={serie.title}
            />
            <span className="title">{serie.title}</span>
          </a>
        </li>
      )
    })

    const stories = this.state.series.map(story => {
      return (
        <li key={story.resourceURI}>
          <a href={story.resourceURI} target="_blank" rel="noopener noreferrer">
            <img
              src={
                story.thumbnail.path +
                '/portrait_fantastic.' +
                story.thumbnail.extension
              }
              className="photo"
              alt={story.title}
            />
            <span className="title">{story.title}</span>
          </a>
        </li>
      )
    })

    return (
      <>
        <Header />
        <div className="Details">
          {hero}
          <div className="Comics">
            <h2>Comics</h2>
            <ul className="list">{comics}</ul>
          </div>
          <div className="Events">
            <h2>Events</h2>
            <ul className="list">{events}</ul>
          </div>
          <div className="Series">
            <h2>Series</h2>
            <ul className="list">{series}</ul>
          </div>
          <div className="Stories">
            <h2>Stories</h2>
            <ul className="list">{stories}</ul>
          </div>
        </div>
      </>
    )
  }
}

export default Details
