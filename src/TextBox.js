import React from 'react';

function TextBox(props) {
  const { name, label, value, onChange } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-10 px-3 py-2 text-base placeholder-gray-500 border rounded-lg focus:shadow-outline-blue focus:border-blue-300"
     
      />
    </div>
  );
}

export default TextBox;
