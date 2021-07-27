import React, { Component } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    if (this.state.contacts.length >= 1) {
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      this.setState({ contacts: contacts });
    }
    return this.setState({ contacts: [], filter: "" });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addContact = (contact) => {
    const addingContact = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (addingContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const lowerCaseContact = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCaseContact)
    );
  };

  onFilter = (value) => {
    this.setState({ filter: value });
  };

  render() {
    return (
      <>
        <h1 className="appHeading">Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className="appHeading">Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.onFilter} />
        <ContactList
          contacts={this.filteredContacts()}
          addContact={this.addContact}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
