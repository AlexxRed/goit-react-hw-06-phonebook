import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
// import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact,filterContacts } from '../redux/contactsSlice';


const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ] 

function App() {
  const localContacts = getContacts();
  const dispatch = useDispatch()



  const [contacts, setContacts] = useState(() => {
    return localContacts ?? initialContacts
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
  function getContacts() {
    return JSON.parse(localStorage.getItem('contacts'));
  };

  const addOneContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    
    if (
      contacts.some(contact =>
        contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts!`);
    };

    setContacts([newContact, ...contacts])
    return dispatch(addContact(newContact))
  };

  const deleteContact = contactId => {
    dispatch(removeContact(contactId))
    setContacts(contacts.filter(({id})=> id !== contactId));
  };

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value))
    setFilter(e.currentTarget.value );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
      <>
        <h1>Phonebook</h1>
          <ContactForm onSubmit={addOneContact} />
        <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={deleteContact}
            />
      </>
    );
}

export default App;





