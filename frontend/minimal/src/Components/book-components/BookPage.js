import React, { Component } from 'react'

export default class BookPage extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>TITLE</h1>
                <h2>AUTHOR</h2>
                <img>COVER</img>
                <p>SUMMARY</p>
                <h4>AVG USER RATING</h4>
                <div className="tags">
                    <h4>Tags</h4>
                    <ul>TAG LIST</ul>
                </div>
                <div className="user-options">
                    <a>ADD USER TAG</a>
                    <a>REVIEW BOOK</a>
                </div>
            </div>
        )
    }
    
}