import { Component } from 'react';
import ContactForm from 'components/Form';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import shortid from 'shortid';

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

  handleSubmitForm = ({ contact }) => {
    const { name, number } = contact;

    this.setState(state => {
      return {
        contacts: [...state.contacts, { id: shortid.generate(), name, number }],
      };
    });
  };

  filterContactsByName = () =>
    this.state.contacts.filter(elem =>
      elem.name.toLowerCase().includes(this.state.filter)
    );

  handleFilterChange = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  deleteContactById = contactId => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(elem => elem.id !== contactId),
      };
    });
  };

  render() {
    const contactNameList = this.state.contacts.map(contact => contact.name);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmitForm}
          contactNameList={contactNameList}
        />
        <h2>Contacts</h2>
        <FilterContacts onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.filterContactsByName()}
          onDeleteId={this.deleteContactById}
        />
      </div>
    );
  }
}

export default App;
