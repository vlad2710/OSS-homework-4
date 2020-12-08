import React, { Component } from "react";

export default class ReportCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };

    this.handleClick = () => {
      this.setState(({ score }) => {
        return {
          score: score + 1,
        };
      });
    };
  }

  componentDidUpdate(){
    if(this.state.score === 10){
      this.setState({
        score: 0
      })
    }
  }

  render() {
    let title;

    if (this.state.score >= 1 && this.state.score <= 4) {
      title = <h1>Your result is poor</h1>;
    } else if (this.state.score >= 5 && this.state.score <= 7) {
      title = <h1>Your result is average</h1>;
    } else if (this.state.score >= 8 && this.state.score <= 10) {
      title = <h1>Your result is excellent</h1>;
    } 

    return (
      <div style={{ textAlign: "center", padding: '10px' }}>
        <button onClick={this.handleClick} style={{padding: '6px 20px'}}>Click</button>
        {title}
      </div>
    );
  }
}
