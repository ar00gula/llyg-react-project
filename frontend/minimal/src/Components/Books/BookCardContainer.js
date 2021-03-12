import React, { Component } from 'react';
import BookCard from '../Books/BookCard'

class BookCardContainer extends Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/books/').then(resp => resp.json()).then(data => this.setState({books: data}))
    }
    
    render() {
        return (
            <div>
                <BookCard books={this.state.books} sortBy={this.props.sortBy}/>
            </div>
        )
    }
}

export default BookCardContainer