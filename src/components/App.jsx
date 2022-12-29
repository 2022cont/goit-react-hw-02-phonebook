import React, { Component } from 'react';

import Form from './form/Form';
import { ContactList } from './сontactList/ContactList';
import { Filter } from './filter/Filter';


class App extends Component {

  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  }

  formHandelSubmit = (data) => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, data] });

  }

  deleteContact = (contactsId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }))
  }


   handleFindContact = event => {
    this.setState({ filter: event.target.value });

  }

  findGoodContacts = () => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name === this.state.filter),
    }))

  }


  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formHandelSubmit} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFindContact} />

        {this.state.contacts.length && (
          <ContactList contacts={this.state.contacts}
            onDeleteContact={this.deleteContact}
            findContacts={this.findGoodContacts} />
        )}
      </div>
    );
  }
}
export default App;
