import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDeleteId }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDeleteId}
        />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteId: PropTypes.func.isRequired,
};
export default ContactList;
