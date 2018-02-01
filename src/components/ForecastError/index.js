import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ForecastError = ({ errorMessage }) => (
  <div className='error'>
    <h3>Something went wrong</h3>
    <p>
      {errorMessage}
    </p>
  </div>
);

ForecastError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ForecastError;
