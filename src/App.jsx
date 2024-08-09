import React, { useState } from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';
import CustomInputTabs from './components/CustomInputTabs';
// import CustomInputEditor from './components/CustomInputEditor';
// import OutputArea from './components/OutputArea';

function App() {
//   const [inputs, setInputs] = useState([{ id: 1, value: '' }]);

//   const addInputTab = () => {
//     if (inputs.length < 5) {
//       setInputs([...inputs, { id: inputs.length + 1, value: '' }]);
//     }
//   };

//   const removeInputTab = (id) => {
//     setInputs(inputs.filter(input => input.id !== id));
//   };

//   const updateInput = (id, value) => {
//     setInputs(inputs.map(input => (input.id === id ? { ...input, value } : input)));
//   };

//   return (
//     <div className="playground-container">
//       <div className="top-section">
//         <CodeEditor />
//         <div className="right-section">
//           <CustomInputTabs inputs={inputs} addInputTab={addInputTab} removeInputTab={removeInputTab} />
//           <CustomInputEditor inputs={inputs} updateInput={updateInput} />
//         </div>
//       </div>
//       <div className="bottom-section">
//         <OutputArea />
//       </div>
//     </div>
//   );
  return(
    <h1>Helo</h1>
  )
}

export default App;