import React, { useState } from 'react';
import styles from './select.css';

interface IDropdownProps {
  selected: string;
  setSelected: (value: string) => void;
}

export function Select({ selected, setSelected }: IDropdownProps) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Value 1', 'Value 2', 'Value 3'];

  return (
    <div className={styles.dropdown}>
      <button className={styles.btn} onClick={() => setIsActive(!isActive)}>
        {selected}
        <span className={!isActive ? styles.arrow : styles.arrowOpened}>
          <svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M15 1L8 8L1 1' stroke='#B7280F' strokeWidth='2' />
          </svg>
        </span>
      </button>
      {isActive && (
        <ul className={styles.list}>
          {options.filter(item => item !== selected).map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className={styles.item}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
