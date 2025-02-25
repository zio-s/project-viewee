import React from 'react';
import Input from '../../../../ui/input';

const InputField = ({ name, value, type, label, placeholder = '', onChange }) => (
  <div className="info_box">
    <span className="label">{label}</span>
    <div className="input_box">
      <Input
        variant="gray"
        size="medium"
        fullWidth={true}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default InputField;
