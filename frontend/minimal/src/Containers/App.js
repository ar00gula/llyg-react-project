import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../Components/Users/Home'
import Login from '../Components/Users/Login'
import Signup from '../Components/Users/Signup'

function App() {

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch('http://localhost:3001/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
      })
    }
  }, [])

  
}

export default App;

// import React, { Component } from 'react';
// import NavBar from '../Components/navbar';
// import '../App.css'
// import BookCardContainer from '../Components/Books/BookCardContainer'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import BookPage from '../Components/Books/BookPage';
// import Home from '../Components/Users/Home'
// import Login from '../Components/Users/Login.js'
// import Signup from '../Components/Users/Signup.js'
// import axios from 'axios'


// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { 
//       isLoggedIn: false,
//       user: {}
//       };
//   }

//   handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     })
//   }

// handleLogout = () => {
//     this.setState({
//     isLoggedIn: false,
//     user: {}
//     })
//   }

//   loginStatus = () => {
//     axios.get('http://localhost:3001/logged_in', 
//    {withCredentials: true})
//     .then(response => {
//       if (response.data.logged_in) {
//         this.handleLogin(response)
//       } else {
//         this.handleLogout()
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   }

//   componentDidMount() {
//     this.loginStatus()
//   }


//   render() {
//   return (
//     <div>
//       <Router>
//         <div className="wrapper">
//         <Switch>
//         <Route 
//               exact path='/' 
//               render={props => (
//               <Home {...props} loggedInStatus={this.state.isLoggedIn}/>
//               )}
//             />
//         <Route 
//           exact path='/login' 
//           render={props => (
//           <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
//           )}
//         />
//         <Route 
//           exact path='/signup' 
//           render={props => (
//           <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
//           )}
//         />
//       </Switch>
//           {/* <Route path="/books/by-title" render={() => <BookCardContainer sortBy={['title']}/>} />
//           <Route path="/books/by-author" component={() => <BookCardContainer sortBy={['author', 'last_name']}/>} /> */}
//           {/* put all my pages here!! the contents will change depending on what URL i'm at!! this is delightful!!!*/}
//         </div>
//         <NavBar />
//       </Router>
//     </div>
//   )}
// }
