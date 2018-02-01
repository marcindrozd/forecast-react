import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const CurrentLocation = ({ location }) => (
  <div className='currentLocation'>
    <div className='title'>
      Current location:
    </div>
    <div className='location'>
      {location}
    </div>
  </div>
)

CurrentLocation.propTypes = {
  location: PropTypes.string.isRequired
};

export default CurrentLocation;
