import { useState } from "react";
import styles from "./styles/select.module.css";

type selectOption = {
  label: string;
  value: any;
};
type SelectProps = {
  options: selectOption[];
  value?: selectOption;
  onChange: (value: selectOption | undefined) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
    >
      <div className={styles.value}>{value?.label}</div>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li key={option.value} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
