import React from "react";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, id, removeContact }) => {
  const remove = () => {
    removeContact(id);
  };
  return (
    <li className={styles.contactListItem}>
      <span className={styles.contactListItemSpan}>{name}</span>:
      <span className={styles.contactListItemSpan}>{number}</span>
      <button type="button" className={styles.listItemButton} onClick={remove}>
        Detete
      </button>
    </li>
  );
};

export default ContactListItem;
