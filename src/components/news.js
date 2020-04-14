import React, { Component } from 'react'
import './css/news.css'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
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
    let list= this.state.news.map((item, index) => {
            return (
              <Card>
              <Card.Img variant="top" src={item.urlToImage} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.content}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"><a href={item.url}>Read more on this...</a></small>
              </Card.Footer>
              </Card>
            )
          })
    
    let card=[], deck=[<br />];
    
    for(let i=0; i<list.length; i=i+3){

      card= list.filter((item,idx)=>{
        return idx>=i && idx< i+3 
      })
      
      
      deck.push(<CardColumns>{card}</CardColumns>);
      deck.push(<br />)
    }


    return (
      <div>
        {deck}
      </div>
    )
  }
}

export default news
