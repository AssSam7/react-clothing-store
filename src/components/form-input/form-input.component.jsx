import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    ></input>
    {label ? (
      <label
        className={`form-input-label ${
          otherProps.value.length > 0 ? "shrink" : ""
        }`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
