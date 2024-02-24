import PropTypes from "prop-types";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDelete: PropTypes.func.isRequired,
};
