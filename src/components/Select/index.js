import React from "react";

export const Select = ({ options, setState, value }) => {
  return (
    <select onChange={(e) => setState(e.target.value)} value={value}>
      <option value="default">Select an option</option>
      {options.map((item, idx) => (
        <option key={idx} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
