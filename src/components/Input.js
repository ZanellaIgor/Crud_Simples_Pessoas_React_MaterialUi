import React from 'react';

function InputField({ label, type, name, onChange, id }) {
  return (
    
      <label htmlFor={name}> {label} 
      <input type={type} name={name}  onChange={onChange} id={id} /></label>
    
  );
}

export default InputField;
