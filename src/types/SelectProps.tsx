export type selectOption = {
  label: string;
  value: any;
};

type singleSelectProps = {
  multiple?: false;
  value?: selectOption;
  onChange: (value: selectOption | undefined) => void;
};

type multipleSelectProps = {
  multiple: true;
  value: selectOption[];
  onChange: (value: selectOption[]) => void;
};

export type SelectProps = {
  options: selectOption[];
} & (singleSelectProps | multipleSelectProps);
