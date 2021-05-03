import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonForm from './ButtonForm';
import { connect } from 'react-redux';
import { addContact } from '../../redux/Contacts/contacts-operations';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = ({ onSubmitForm }) => {
  const labelInputIdName = uuidv4();
  const labelInputIdNumber = uuidv4();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    const contact = { id: uuidv4(), name: name, number: number };
    event.preventDefault();
    onSubmitForm(contact);

    resetForm();
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={labelInputIdName}>
        Name
      </label>
      <input
        className={styles.input}
        id={labelInputIdName}
        type="text"
        name="name"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      ></input>
      <label className={styles.label} htmlFor={labelInputIdNumber}>
        Number
      </label>
      <input
        className={styles.input}
        id={labelInputIdNumber}
        type="tel"
        name="number"
        required
        placeholder="Enter you number"
        value={number}
        onChange={handleChange}
      ></input>
      <ButtonForm />
    </form>
  );
};

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmitForm: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
