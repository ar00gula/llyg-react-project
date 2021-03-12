import React, { Component } from 'react'
import SettingsIcon from '../settingsicon.png';

export default class NavBar extends Component {

    render() {
        // how the fuck do you do logins in JS
        return (
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/authors">Authors</a>
                <div className="dropdown left">
                    <button className="dropbtn gen">Books</button>
                    <div className="dropdown-content">
                    <a href="/books/by-author">By Author</a>
                    <a href="/books/by-title">By Title</a>
                    <a href="/books/by-genre">By Genre</a>
                    </div>
                </div>
                <div className="dropdown right">
                    <button className="dropbtn settings"><img src={SettingsIcon} height="35px"/></button>
                    <div className="dropdown-content-right">
                    <a href="/account/settings">Settings</a>
                    <a href="/account/my-favorites">My Favorites</a>
                    <a href="/account/my-reviews">My Reviews</a>
                    <a href="/">Logout</a>
                    </div>
                </div> 
            </div>
        )
    }
}
