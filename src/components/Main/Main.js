import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Main = props => (
  <div
    className={classNames('Main d-flex flex-column', {
      'flex-1-0-auto': !props.collapse,
      'flex-0-0-auto': props.collapse,
      'px-3': !props.noPaddingX,
    })}
    style={{
      // Contain LoadingOverlay which has absolute position.
      position: 'relative',
    }}
  >
    {props.children}
  </div>
);

Main.propTypes = {
  // Will not flex-grow vertically. Useful for nesting of multiple Main components.
  collapse: PropTypes.bool,
  // No horizontal padding.
  // noPaddingX: PropTypes.bool,
};

Main.defaultProps = {
  collapse: false,
};

export default Main;
