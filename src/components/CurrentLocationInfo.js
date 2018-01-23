import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './CurrentLocationInfo.css';

class CurrentLocationInfo extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div className='currentLocation'>
        <div className='title'>
          Current location:
        </div>
        <div className='location'>
          {location}
        </div>
      </div>
    )
  }
};

CurrentLocationInfo.propTypes = {
  location: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    location: state.location.city
  }
};

export default connect(mapStateToProps)(CurrentLocationInfo);
