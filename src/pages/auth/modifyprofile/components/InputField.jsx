import React from 'react';
import Input from '../../../../ui/input';

const InputField = ({ label, placeholder = '' }) => (
  <div className="info_box">
    <span className="label">{label}</span>
    <div className="input_box">
      <Input variant="gray" size="medium" fullWidth={true} placeholder={placeholder} />
    </div>
  </div>
);

export default InputField;
