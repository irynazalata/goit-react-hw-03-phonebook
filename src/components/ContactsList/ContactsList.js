import React from 'react';
import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ searchContact, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {searchContact.map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={id}>
            <p className={styles.contact}>
              {' '}
              - {name}: {number}
            </p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  searchContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ContactsList;
