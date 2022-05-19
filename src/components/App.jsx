import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useDispatch,useSelector } from 'react-redux';
import { removeContact, filterContacts, getContactsList, getFilteredContacts} from '../redux/contactsSlice';



function App() {
  const dispatch = useDispatch();
  const conactsList = useSelector(getContactsList);
  const filtredList = useSelector(getFilteredContacts)


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
          <ContactForm />
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





