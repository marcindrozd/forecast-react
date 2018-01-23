import React from 'react';
import { connect } from 'react-redux';

import { FETCH_FORECAST_REQUEST } from '../constants';

import Header from './Header';
import ForecastInfo from './ForecastInfo';
import Spinner from './Spinner';

import './ForecastApp.css';

class ForecastApp extends React.Component {
  componentDidMount() {
    const { fetchForecast } = this.props;
    fetchForecast();
  }

  render() {
    const { isFetching } = this.props;

    return (
      <div className='ForecastApp'>
        <Header />

        { isFetching.inProgress
          ? <Spinner />
          : <ForecastInfo />
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecast: () => dispatch({ type: FETCH_FORECAST_REQUEST })
  }
};

ForecastApp = connect(mapStateToProps, mapDispatchToProps)(ForecastApp);

export default ForecastApp;
