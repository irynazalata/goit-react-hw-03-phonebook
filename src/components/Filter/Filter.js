import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, searchContact }) => {
  return (
    <label className={styles.label}>
      {' '}
      Find contacts by name
      <input
        className={styles.input}
        onChange={event => searchContact(event.target.value)}
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  searchContact: PropTypes.func.isRequired,
};

export default Filter;
