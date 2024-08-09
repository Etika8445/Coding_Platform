import React from 'react';
import './CodeEditor.css';

const CodeEditor = () => {
  return (
    <div className="editor-container">
      <textarea className="editor" placeholder="Write your code here..." />
      <div className="button-container">
        <button className="editor-button">Run</button>
        <button className="editor-button">Reset</button>
      </div>
    </div>
  );
};

export default CodeEditor;
