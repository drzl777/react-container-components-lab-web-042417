// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            +  `api-key=${NYT_API_KEY}` + `&query=`;


export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  searchReviews(event) {
    event.preventDefault()
    fetch(URL+this.state.searchTerm)
      .then(resp => resp.json())
      .then(data => data.results)
      .then(searchedReviews => {
        this.setState({
          reviews: searchedReviews
        }, () => console.log('Reviews', this.state.reviews))
      })
      .catch(err => console.log(err))
  }

  setSearchTerm(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.searchReviews.bind(this)}>
          <input type="text" placeholder="Search..." onChange={this.setSearchTerm.bind(this)} value={this.state.searchTerm} />
        </form>
        <h1>Searched Movie Reviews</h1>
        <MovieReviews  reviews={this.state.reviews}/>
      </div>

    )
  }
}
