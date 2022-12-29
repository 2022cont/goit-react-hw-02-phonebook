import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ value, onChange}) => (
    <label>
      Find contact by name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
);
