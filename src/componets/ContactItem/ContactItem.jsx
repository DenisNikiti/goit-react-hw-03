import PropTypes from "prop-types";
import css from "./ContactItem.module.css";
export default function ContactItem({
  contact: { name, number, id },
  onDelete,
}) {
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

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
