import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class BookCard extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CardFront cover={this.props.cover} />
                <CardBack title={this.props.title} author={this.props.author} />
            </div>
        )
    }
    
}

BookCard.defaultProps = {
    title: 'Unknown',
    author: 'Unknown',
    genres: ['No Genre(s) Found'],
    cover: 'default'
  }