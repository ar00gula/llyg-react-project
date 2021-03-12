import React from 'react'
import BookCardContainer from '../Books/BookCardContainer'

const Home = (props) => {
    
        return (
            <div>
                <div className="user-show">
                    <BookCardContainer />
                </div>
                <div className="user-show"></div>
                <div className="user-reviews"></div>
            </div>
        )
    }
    
    export default Home