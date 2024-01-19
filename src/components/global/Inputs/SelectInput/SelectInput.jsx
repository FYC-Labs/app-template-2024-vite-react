import { Form } from 'react-bootstrap';

const SelectInput = ({
  name,
  signal,
  disabled,
  value,
  variant = 'form-control', // || form-control-border
  className,
  options,

  customOnChange, // ONLY USE IF NEEDED
}) => {
  if (!signal || !name) {
    return new Error(`Universal Select has no signal or name (Name: ${name})`);
  }
  return (
    <Form.Select
      className={`${variant || ''} form-select bg-white ${className || ''}`}
      onChange={customOnChange || ((e) => signal.update({
        [name]: e.target.value,
      }))}
      id={name}
      value={value || signal.value[name] || 'Select...'}
      disabled={disabled}
    >
      {options && options.map((obj, idx) => (
        <option key={`${name}-${idx}`} value={obj.value} disabled={obj.disabled}>{obj.label}</option>
      ))}
    </Form.Select>
  );
};

export default SelectInput;
