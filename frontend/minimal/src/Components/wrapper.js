import React, { Component } from 'react'
import Stars from './stars'
import BookCardContainer from './container-components/BookCardContainer';

export default class Wrapper extends Component {

    render() {
        return (
            <div className="wrapper">
                <BookCardContainer />
                <Stars />
            </div>
        )
    }
}