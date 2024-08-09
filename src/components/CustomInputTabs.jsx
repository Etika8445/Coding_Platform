import React from 'react';
import './CustomInputTabs.css';
import { Tabs, Tab, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CustomInputTabs = ({ inputs, addInputTab, removeInputTab }) => {
  return (
    <div className="tabs-container">
      <Tabs value={0} variant="scrollable" scrollButtons="auto">
        {inputs.map((input, index) => (
          <Tab key={input.id} label={`Input ${index + 1}`} />
        ))}
      </Tabs>
      {inputs.length < 5 && (
        <IconButton onClick={addInputTab} color="primary">
          <AddCircleIcon style={{ color: '#f5f5f5' }} />
        </IconButton>
      )}
    </div>
  );
};

export default CustomInputTabs;
