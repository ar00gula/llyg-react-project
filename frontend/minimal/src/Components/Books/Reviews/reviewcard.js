import React, { Component } from 'react'
import StarRating from './star-rating'

export default class ReviewCard extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3>REVIEW TITLE</h3>
                <h4>USERNAME</h4>
                <StarRating rating={} />

            </div>
        )
    }
    
}