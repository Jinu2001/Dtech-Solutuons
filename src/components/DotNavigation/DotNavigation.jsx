// DotNavigation.js
import React from 'react';

class DotNavigation extends React.Component {
  render() {
    const dotStyle = {
      height: '15px',
      width: '15px',
      borderRadius: '50%',
      backgroundColor: '#bbb',
      display: 'inline-block',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };

    const activeDotStyle = {
      ...dotStyle,
      width: '30px',
      borderRadius: '7px',
      backgroundColor: '#1B86C8',
    };

    return (
      <div style={{ textAlign: 'center' }}>
        {Array.from({ length: this.props.total }, (_, i) => (
          <span
            key={i}
            style={this.props.current === i ? activeDotStyle : dotStyle}
            onClick={() => this.props.onDotClick(i)}
          />
        ))}
      </div>
    );
  }
}

export default DotNavigation;
