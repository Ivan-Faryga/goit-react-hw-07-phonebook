import React from "react";
import PropTypes from "prop-types";
import s from "./ContactListItem.module.css";
import { useDeleteContactMutation } from "../../../redux/contacts/contactsSlise";

const ContactListItem = ({ id, name, number, onDelete }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li className={s.contactItem}>
      <p className={s.contactName}>
        {name}: <span className={s.contactNumber}>{number}</span>
      </p>
      <button
        className={s.deleteContactBtn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
