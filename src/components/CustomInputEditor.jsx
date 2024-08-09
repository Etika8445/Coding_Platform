import React from 'react';
import './CustomInputEditor.css';

const CustomInputEditor = ({ inputs, updateInput }) => {
  return (
    <div className="input-editor-container">
      {inputs.map((input, index) => (
        <textarea
          key={input.id}
          className="input-textarea"
          placeholder={`Input ${index + 1}`}
          value={input.value}
          onChange={(e) => updateInput(input.id, e.target.value)}
        />
      ))}
    </div>
  );
};

export default CustomInputEditor;
