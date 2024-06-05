"use client";
import { useState } from "react";
import styles from "./popup.module.css";

function Component() {
  const [ccFields, setCcFields] = useState(['']);

  const addCcField = () => {
    setCcFields([...ccFields, '']);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupTitle}>
        <h2 className="text-2xl font-bold">Send Document</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">XRPL Ambassador</p>
      </div>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Recipient Full Name</label>
          <input type="text" name="recipientName" required />
        </div>
        <div className={styles.formGroup}>
          <label>Recipient Email</label>
          <input type="email" name="recipientEmail" required />
        </div>
        <div className={styles.formGroup}>
          <label>Emails in Copy</label>
          {ccFields.map((field, index) => (
            <input key={index} type="email" name={`ccEmail${index}`} />
          ))}
          <button type="button" className={styles.addButton} onClick={addCcField}>+</button>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default Component;
