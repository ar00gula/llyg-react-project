import React from 'react'
// import CardFront from './CardFront'
// import CardBack from './CardBack'

const BookCard = (props) => {

const sorted = props.books.sort((a, b) => {
    let sortBy = props.sortBy
    let fa
    let fb

    if (!sortBy) {
        fa = a
        fb = b
    } else if (sortBy.length === 1) {
        fa = a[sortBy[0]]
        fb = b[sortBy[0]]
    } else {
        fa = a[sortBy[0]][sortBy[1]]
        fb = b[sortBy[0]][sortBy[1]]
    }

    //refactor this so that it can handle any depth

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
})

    return (
        <div>
            {sorted.map(book => (
                <div className="bookcard" key={book.id}>
                    <h1><a href={book.title.replace(/\s+/g, '-')}>{book.title}</a></h1>
                    <h2>{book.author.first_name} {book.author.last_name}</h2>
                </div>
            ))}
        </div>
    )
}

export default BookCard