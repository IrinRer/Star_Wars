import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';


const Filter = () => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;

  };

  return (
    <>
      <p>color eye</p>
      <select onChange={handleChange}>
        <option value="">All</option>
        <option value="brown">brown</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="white">white</option>
      </select>
    </>
  );
};

export default Filter;
