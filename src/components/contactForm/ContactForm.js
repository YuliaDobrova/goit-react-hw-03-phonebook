import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = { name: "", number: "" };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact({ ...this.state, id: uuidv4() });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.onHandleSubmit}>
        <label className={styles.formName}>
          Name:
          <input
            className={styles.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={this.state.name}
            onChange={this.onHandleChange}
            required
          />
        </label>
        <label className={styles.formName}>
          Phone№:
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            value={this.state.number}
            onChange={this.onHandleChange}
            required
          />
        </label>
        <button type="submit" className={styles.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
