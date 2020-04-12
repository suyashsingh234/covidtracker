import React, { Component } from 'react'
import './css/news.css'
const fetch = require('node-fetch')

class news extends Component {
  constructor (props) {
    super(props)

    this.state = {
      news: []
    }
  }

  componentDidMount () {
    fetch('http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0ca51b34c21d4020bbd2f834460f4743')
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        this.setState({
          news: myJson.articles
        })
      })
  }

  render () {
    return (
      <div>
        {this.state.news.map((item, index) => {
          return (
            <div key={item.index}>
              <img class='i' src={item.urlToImage} />
              <h2>{item.title}</h2>
              <a href={item.url}>Read more on this...</a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default news
