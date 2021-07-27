import React from "react";
import ContactListItem from "../contactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <>
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            name={name}
            id={id}
            key={id}
            number={number}
            removeContact={removeContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
