import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
//'01641808a5024a20bf5a6d7283394e86'
const NYT_API_KEY = '01641808a5024a20bf5a6d7283394e86'// 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: []
    }

  }

  componentWillMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => data.results)
      .then(latestReviews => {
        this.setState({
          reviews: latestReviews
        })
      })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews  reviews={this.state.reviews} />
      </div>
    )
  }
}
