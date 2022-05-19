import { Label, InputFilter } from './Filter.styled';
import { useDispatch,useSelector } from 'react-redux';
import {filterContacts, getFilteredContacts} from '../../redux/contactsSlice';


const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  
  return (<Label>
    Find contacts by name
    <InputFilter type="text" value={value} onChange={onChange} />
  </Label>)
};


export default Filter;