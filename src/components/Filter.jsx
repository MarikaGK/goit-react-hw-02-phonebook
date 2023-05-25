const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="filter" name="filter" value={value} onChange={onChange} />
  </label>
);

export default Filter;