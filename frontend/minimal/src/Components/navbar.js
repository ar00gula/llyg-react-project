import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        // how the fuck do you do logins in JS
        return(
            <ul className="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li class="dropdown">
                    <a href="#h" class="dropbtn">Dropdown</a>
                    <div class="dropdown-content">
                    <a href="#a">Link 1</a>
                    <a href="#m">Link 2</a>
                    <a href="#s">Link 3</a>
                    </div>
                </li>
            </ul>
        )
    }
}
