import React, { Component } from 'react';
class Pump extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    pumpSrc: '/assets/img/grip1.png'
  };

  stylePump = {
    width: '100px',
    display: 'block',
    position: 'absolute',
    bottom: '10px',
    right: '46%'
  }
  pumpDown = () => {
    this.setState({ pumpSrc: '/assets/img/grip2.png' });
  }
  pumpUp = () => {
    this.setState({ pumpSrc: '/assets/img/grip1.png' });
    this.props.pumpBaloon();
  }

  render() {
    return (<img style={this.stylePump} onMouseDown={this.pumpDown} onMouseUp={this.pumpUp} src={this.state.pumpSrc} alt='pump' width="150" />);
  }
}

export default Pump;