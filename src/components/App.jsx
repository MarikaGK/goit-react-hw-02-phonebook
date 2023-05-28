import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  handleFormSubmit = ({ name, number }) => {
    if (name === '') {
      return;
    }
    if (this.state.contacts.find(e => e.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleDelete = evt => {
    evt.preventDefault();
    const { id } = evt.target;
    this.setState({ contacts: this.state.contacts.filter(c => c.id !== id) });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <main>
        <h2>Phonebook</h2>
        <ContactForm contacts={contacts} onFormSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.handleDelete}
        />
      </main>
    );
  }
}

export default App;
