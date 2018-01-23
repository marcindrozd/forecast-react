import React from 'react';
import PropTypes from 'prop-types';

const FetchError = ({ errorMessage }) => (
  <div>{errorMessage}</div>
);

FetchError.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default FetchError;
