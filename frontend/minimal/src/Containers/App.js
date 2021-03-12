import React, { Component } from 'react';
import NavBar from '../Components/navbar';
import '../App.css'
import BookCardContainer from '../Components/Books/BookCardContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookPage from '../Components/Books/BookPage';
import Home from '../Components/Users/Home'


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div className="wrapper">
            <Route exact path="/" render={Home} />
            <Route path="/books" component={BookPage} />
            <Route path="/books/by-title" render={() => <BookCardContainer sortBy={['title']}/>} />
            <Route path="/books/by-author" component={() => <BookCardContainer sortBy={['author', 'last_name']}/>} />
            {/* put all my pages here!! the contents will change depending on what URL i'm at!! this is delightful!!!*/}
          </div>
          <NavBar />
        </Router>
      </div>
    )
  }
}
