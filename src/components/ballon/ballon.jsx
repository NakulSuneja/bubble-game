import React from 'react';

const Ballon = (props) => {

  const stylePump = {
    margin: '0px auto',
    display: 'block',
    position: 'relative',
    bottom: -540 + (1.16 * props.baloonWidth) + 'px'
  }

  return (<img style={stylePump} src={props.ballonSrc} alt='ballon' width={props.baloonWidth} />);

}

export default Ballon;