import css from "./SearchBox.module.css";
import PropTypes from "prop-types";
export default function SearchBox({ filter, onFilter }) {
  return (
    <div className={css.formInput}>
      <label htmlFor="search">Find contac by name</label>
      <input
        value={filter}
        type="text"
        id="search"
        onChange={(e) => {
          onFilter(e.target.value);
        }}
      ></input>
    </div>
  );
}

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
