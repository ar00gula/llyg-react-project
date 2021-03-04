import React, { Component } from 'react'
import SettingsIcon from '../settingsicon.png';

export default class NavBar extends Component {

    // seeDropdown = (event) => {
    //     event.target.display = "block"
    // }

    render() {
        // how the fuck do you do logins in JS
        return (
            <div className="navbar">
                <a href="#home">Home</a>
                <a href="#news">Authors</a>
                <div className="dropdown left">
                    <button className="dropbtn gen">Books</button>
                    <div className="dropdown-content">
                    <a href="#a">Link 1</a>
                    <a href="#a">Link 2</a>
                    <a href="#a">Link 3</a>
                    </div>
                </div>
                <div className="dropdown right">
                    <button className="dropbtn settings"><img src={SettingsIcon} height="35px"/></button>
                    <div className="dropdown-content-right">
                    <a href="#a">Settings</a>
                    <a href="#a">My Books</a>
                    <a href="#a">My Reviews</a>
                    <a href="#a">Logout</a>
                    </div>
                </div> 
            </div>
        )
    }
}
