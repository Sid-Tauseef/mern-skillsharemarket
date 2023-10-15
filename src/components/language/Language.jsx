import "./Language.css"
import React, { useState } from 'react';

const Language = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1'); // Set the default selected option

  const options = ['Option 1', 'Option 2'];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="language">
      <select className="change-option" value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Language;
