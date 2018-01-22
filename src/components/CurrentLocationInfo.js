import React from 'react';
import { connect } from 'react-redux';

class CurrentLocationInfo extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <p>
        Current location: { location }
      </p>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    location: state.currentLocation
  }
}

export default connect(mapStateToProps)(CurrentLocationInfo);
