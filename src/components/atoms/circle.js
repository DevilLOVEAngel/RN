import {Path as ARTPath, Shape as ARTShape} from '@react-native-community/art';

import PropTypes from 'prop-types';
import React from 'react';

function makeCirclePath(x, y, radius, direction) {
  const arcMethod = direction === 'counter-clockwise' ? 'counterArc' : 'arc';

  return new ARTPath()
    .moveTo(x, y)
    .move(radius, 0)
    [arcMethod](0, radius * 2, radius, radius)
    [arcMethod](0, radius * -2, radius, radius)
    .close();
}

class Circle extends React.Component {
  static defaultProps = {
    offset: {top: 0, left: 0},
    strokeWidth: 0,
    direction: 'clockwise',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {radius, offset, strokeWidth, direction, ...restProps} = this.props;

    const path = makeCirclePath(
      (offset.left || 0) + strokeWidth / 2,
      (offset.top || 0) + strokeWidth / 2,
      radius - strokeWidth / 2,
      direction,
    );

    return (
      <ARTShape
        d={path}
        stroke="black"
        strokeWidth={strokeWidth}
        {...restProps}
      />
    );
  }
}

Circle.propTypes = {
  radius: PropTypes.number.isRequired,
  offset: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  strokeWidth: PropTypes.number,
  direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
};

export default Circle;
