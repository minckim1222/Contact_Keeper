import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { name, id, email, phone, type } = contact;
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li className='my'>
            <i className='fa fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li className='my'>
            <i className='fa fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          onClick={() => setCurrent(contact)}
          className='btn btn-dark btn-sm'
        >
          Edit
        </button>
        <button onClick={onDelete} className='btn btn-danger btn-sm'>
          Delete
        </button>
      </p>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};
export default ContactItem;
