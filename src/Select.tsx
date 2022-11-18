import { useEffect, useState } from "react";
import styles from "./styles/select.module.css";
import { SelectProps, selectOption } from "./types/SelectProps";


export default function Select({
  multiple,
  value,
  onChange,
  options,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlighedIndex, setHighlighedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setHighlighedIndex(0);
  }, [isOpen]);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }
  function selectOption(option: selectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option)); // if the selected option onlready selected before then going to remove using filter.
      } else {
        onChange([...value, option]); // add the new option in value[].
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: selectOption) {
    return multiple ? value.includes(option) : option === value; // if multiple selected enable then multiple or for only single selecton bool value return
  }

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
    >
      <div className={styles.value}>
        {multiple
          ? value.map((singleValue) => (
              <button
                key={singleValue.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(singleValue);
                }}
                className={styles["option-badge"]}
              >
                {singleValue.label}{" "}
                <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.label}
      </div>
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
