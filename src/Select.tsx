import { useEffect, useState } from "react";
import styles from "./styles/select.module.css";
import { SelectProps, selectOption } from "./types/SelectProps";

// type selectOption = {
//   label: string;
//   value: any;
// };
// type SelectProps = {
//   options: selectOption[];
//   value?: selectOption;
//   onChange: (value: selectOption | undefined) => void;
// };

export default function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlighedIndex, setHighlighedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setHighlighedIndex(0);
  }, [isOpen]);

  function clearOptions() {
    onChange(undefined);
  }
  function selectOption(option: selectOption) {
    if (option !== value) onChange(option);
  }

  function isOptionSelected(option: selectOption) {
    return option === value;
  }

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
    >
      <div className={styles.value}>{value?.label}</div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlighedIndex(index)}
            key={option.value}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            } ${index === highlighedIndex ? styles.highlighted : ""}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
