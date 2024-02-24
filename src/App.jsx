import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import data from "./data.json";
import ContactForm from "./componets/ContactForm/ContactForm ";
import SearchBox from "./componets/SearchBox/SearchBox";
import ContactList from "./componets/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedcontacts = localStorage.getItem("contacts");
    return savedcontacts !== null ? JSON.parse(savedcontacts) : data;
  });
  const [filter, setfilter] = useState("");

  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { ...contact, id: nanoid() }];
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevcontacts) => {
      return prevcontacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} onFilter={setfilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
