import React, { Component } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {    
    const localProducts = localStorage.getItem('allContacts');
    const parseProducts = JSON.parse(localProducts);
    if (parseProducts) {
      this.setState({ contacts: parseProducts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('allContacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addNewContact = (newContact) => {
    const { contacts } = this.state;
    const isExists = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    isExists
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm cbAddNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <div className="Contacts">
        <Filter filteringName={filter} cbInputChange={this.handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          cbRemoveContact={this.removeContact}
          />
          </div>
      </div>
    );
  }
}

export default App;
