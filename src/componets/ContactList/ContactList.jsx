import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
