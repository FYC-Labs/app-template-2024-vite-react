import { Form } from 'react-bootstrap';

const DatePicker = ({
  name,
  signal,
  value,
  placeholder,
  variant = 'form-control', // || form-control-border
  className,
}) => {
  if (!signal || !name) {
    return new Error(`ZipInput has no signal or name (Name: ${name})`);
  }
  return (
    <Form.Control
      className={`${variant} ${className}`}
      type="date"
      placeholder={placeholder}
      value={value || signal.value[name]}
      onChange={(e) => signal.update({ [name]: e.target.value })}
    />
  );
};

export default DatePicker;
