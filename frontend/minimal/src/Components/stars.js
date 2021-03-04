import React, { Component } from 'react';

class Stars extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0
      };
    }
    
    setRating = (i) => {
      this.setState({
        rating: i + 1
      });
    };

    // handleClick = () => {
    //     const userRating = this.state.rating
    // }
  
    render() {
        let rating = this.state.rating
        let stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} onClick={() => this.setRating(i)}> ★ </span>);
            } else {
                stars.push(<span key={i} onClick={() => this.setRating(i)}> ☆ </span>);
            }
        }
  
        return (
            <div>
            {stars}
            <button className="submit-button">Submit</button>
            </div>
        );
    };
  }
  export default Stars;