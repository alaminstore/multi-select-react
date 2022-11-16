export type selectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  options: selectOption[];
  value?: selectOption;
  onChange: (value: selectOption | undefined) => void;
};
