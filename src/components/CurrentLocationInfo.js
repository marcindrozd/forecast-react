import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    location: state.currentLocation
  }
}

export default connect(mapStateToProps)(CurrentLocationInfo);
