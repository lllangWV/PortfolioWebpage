import React from 'react';
import PropTypes from 'prop-types';

function PersonalStatement({ statement }) {
  return (
    <section>
      <h1>About Me</h1>
      <p>{statement}</p>
    </section>
  );
}

PersonalStatement.propTypes = {
  statement: PropTypes.string.isRequired,
};

export default PersonalStatement;
