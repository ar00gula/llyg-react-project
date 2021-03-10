import React from 'react'
// import CardFront from './CardFront'
// import CardBack from './CardBack'

const BookCard = (props) => {
    return (
        <div>
            {props.books.map(book => (
                <div>
                    <h1>{book.title}</h1>
                    <h2>{book.author.first_name} {book.author.last_name}</h2>
                </div>
            ))}
        </div>
    )
}

export default BookCard