import React, { Component } from 'react'
import Stars from './stars'

export default class Wrapper extends Component {

    render() {
        return (
            <div className="wrapper">
                <Stars />
            </div>
        )
    }
}