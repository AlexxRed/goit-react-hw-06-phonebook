import { Label, InputFilter } from './Filter.styled';
import { useDispatch,useSelector } from 'react-redux';
import {filterContacts, getFilteredContacts} from '../../redux/contactsSlice';


const Filter = ({ value }) => {
  const dispatch = useDispatch();

    const changeFilter = e => {
    return dispatch(filterContacts(e.currentTarget.value))
  };

  return (<Label>
    Find contacts by name
    <InputFilter type="text" value={value} onChange={changeFilter} />
  </Label>)
};


export default Filter;