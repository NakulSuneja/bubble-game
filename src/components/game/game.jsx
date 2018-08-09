import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import Ballon from '../ballon/ballon';
import Pump from '../pump/pump';
import Score from '../score/score';

class Game extends Component {
  state = {
    isFull: false,
    ballonWidth: 100,
    ballonSrc: '/assets/img/balloon.png',
    chances: 20,
    current: 1,
    pumps: 0,
    collection: 0,
    totalCollection: 0,
    ballonBurstWidth: Math.floor(Math.random() * (1000 - 180 + 1)) + 180
  }

  goFull = () => {
    this.setState({ isFull: true });
  }

  pumpBallon = () => {
    const inflateWidth = this.state.ballonWidth + 30;
    if (inflateWidth > this.state.ballonBurstWidth) {
      this.burstBallon();
    } else {
      this.setState({
        ballonWidth: inflateWidth,
        collection: this.state.collection + 0.5,
        pumps: this.state.pumps + 1
      });
      this.inflate.play();
    }
  }

  burstBallon = () => {
    this.setState({
      ballonSrc: '/assets/img/poppedballoon.png',
      current: this.state.current + 1
    });
    this.burst.play();
    setTimeout(() => {
      this.resetBallon();
    }, 1000);
  }

  collectMoney = () => {
    this.skipNext();
  }

  skipNext = () => {
    this.setState({
      current: this.state.current + 1,
      ballonWidth: 100,
      ballonSrc: '/assets/img/balloon.png',
      totalCollection: this.state.totalCollection + this.state.collection,
      collection: 0,
      pumps: 0,
      ballonBurstWidth: Math.floor(Math.random() * (1000 - 180 + 1)) + 180
    });
    this.skip.play();
  }

  resetBallon = () => {
    this.setState({
      ballonWidth: 100,
      ballonSrc: '/assets/img/balloon.png',
      collection: 0,
      pumps: 0,
      ballonBurstWidth: Math.floor(Math.random() * (1000 - 180 + 1)) + 180
    });

  }

  render() {
    const styleProp = {
      overflow: 'hidden',
      height: '600px'
    }
    return (<div style={styleProp} className="ballon-game">
      <Ballon
        baloonWidth={this.state.ballonWidth}
        ballonSrc={this.state.ballonSrc}>
      </Ballon>
      <audio ref={(inflate) => { this.inflate = inflate; }}>
        <source src="/assets/sounds/inflate.wav" type="audio/wav" >
        </source>
      </audio>
      <audio ref={(burst) => { this.burst = burst; }}>
        <source src="/assets/sounds/explosion.wav" type="audio/wav" >
        </source>
      </audio>
      <audio ref={(skip) => { this.skip = skip; }}>
        <source src="/assets/sounds/casino.wav" type="audio/wav" >
        </source>
      </audio>
      <Pump pumpBaloon={this.pumpBallon} ></Pump>
      <Score score={
        {
          current: this.state.current,
          chances: this.state.chances,
          currentWinnings: this.state.collection,
          totalWinnings: this.state.totalCollection,
          currentPumps: this.state.pumps
        }
      }
        collectMoney={this.collectMoney} >
      </Score>
    </div >);
  }
}

export default Game;