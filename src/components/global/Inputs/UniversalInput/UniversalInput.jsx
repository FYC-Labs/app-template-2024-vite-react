import { Form } from 'react-bootstrap';

const UniversalInput = ({
  type,
  name,
  signal,
  variant = 'form-control', // || form-control-border
  className,
  placeholder,
  inputFormatCallback,
  value,
  customOnChange, // ONLY USE IF NEEDED
  autoComplete,
  ...props
}) => {
  if ((!signal || !name) && !customOnChange) {
    return new Error(`Universal Input has no signal or name (Name: ${name})`);
  }

  return (
    <Form.Control
      type={type || 'text'}
      value={signal?.value[name] || value || ''}
      placeholder={placeholder}
      className={`w-100 ${variant} ${className || ''}`}
      name={name}
      autoComplete={autoComplete}
      onChange={customOnChange || ((e) => signal.update({
        [name]: inputFormatCallback ? inputFormatCallback(e.target.value) : e.target.value,
      }))}
      {...props}
    />
  );
};

export default UniversalInput;
