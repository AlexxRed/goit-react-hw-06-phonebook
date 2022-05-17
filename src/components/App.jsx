
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useDispatch,useSelector } from 'react-redux';
import { addContact, removeContact, filterContacts, getContactsList, getFilteredContacts} from '../redux/contactsSlice';



function App() {
  const dispatch = useDispatch();
  const conactsList = useSelector(getContactsList);
  const filtredList = useSelector(getFilteredContacts)



  const addOneContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    
    if (
      conactsList.some(contact =>
        contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts!`);
    };

    return dispatch(addContact(newContact))
  };

  const deleteContact = contactId => {
    return dispatch(removeContact(contactId))
  };

  const changeFilter = e => {
    return dispatch(filterContacts(e.currentTarget.value))
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filtredList.toLowerCase();
    return conactsList.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
      <>
        <h1>Phonebook</h1>
          <ContactForm onSubmit={addOneContact} />
        <h2>Contacts</h2>
          <Filter value={filtredList} onChange={changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={deleteContact}
            />
      </>
    );
}

export default App;





