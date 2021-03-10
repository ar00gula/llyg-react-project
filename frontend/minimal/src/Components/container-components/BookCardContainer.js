import React, { Component } from 'react';
import BookCard from '../book-components/BookCard'

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
        console.log(this.state.books)
        return (
            <div>
                <BookCard books={this.state.books} />
            </div>
        )
    }
}

export default BookCardContainer