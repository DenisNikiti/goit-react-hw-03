import PropTypes from "prop-types";
import css from "./Contact.module.css";
export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <li className={css.listItem}>
      <div>
        <p>{name}</p>

        <p>{number}</p>
      </div>
      <div className={css.container}>
        <button
          type="button"
          className={css.buttonList}
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
