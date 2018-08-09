import React, { Component } from 'react';
class Score extends Component {
  constructor(props) {
    super(props)
  }
  state = {}

  collectMoney = () => {
    this.props.collectMoney();
  }
  render() {
    const styleProp = {
      position: 'absolute',
      bottom: '10px',
      left: '66%'
    }
    return (
      <p style={styleProp}>
        Ballon number: {this.props.score.current} of {this.props.score.chances}<br />
        Number of Pumps: {this.props.score.currentPumps}<br />
        Money for this Balloon: {this.props.score.currentWinnings}<br />
        Total Winnings: {this.props.score.totalWinnings}<br />
        <img onClick={this.collectMoney} src='/assets/img/collectbutton.jpg' alt='collect' width="150" />
      </p>);
  }
}

export default Score;