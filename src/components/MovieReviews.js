// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({reviews}) => {

  return (
    <div className="review-list">
      {reviews.map(movRev => {
          return (<div className="review" >
            <h3>{movRev.headline}</h3>
            <a href={movRev.link.url}>
              <img alt="multimedia" src="{movRev.multimedia.src}" />
            </a>
          </div>)
        })
      }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
