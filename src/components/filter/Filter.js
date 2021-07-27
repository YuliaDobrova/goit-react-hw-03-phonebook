import React from "react";
import styles from "./FIlter.module.css";

const Filter = ({ value, onFilter }) => {
  const onContactFilter = (event) => {
    onFilter(event.target.value);
  };

  return (
    <>
      <label className={styles.filterName}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={value}
          onChange={onContactFilter}
        />
      </label>
    </>
  );
};

export default Filter;
