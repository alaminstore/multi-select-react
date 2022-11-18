import { useState } from "react";
import Select from "./Select";
import "./App.css";
import { selectOption } from "./types/SelectProps";

const options = [
  { label: "Html", value: 1 },
  { label: "Css", value: 2 },
  { label: "Bootstrap", value: 3 },
  { label: "TailwindCss", value: 4 },
  { label: "Material Ui", value: 5 },
  { label: "Element Ui", value: 6 },
  { label: "React Js", value: 7 },
  { label: "Vue Js", value: 8 },
  { label: "PHP", value: 9 },
  { label: "Laravel", value: 10 },
  { label: "Python", value: 11 },
  { label: "Express Js", value: 12 },
];

function App() {
  const [value1, setValue1] = useState<selectOption[]>([options[0]]);
  const [value2, setValue2] = useState<selectOption | undefined>(options[0]);
  return (
    <>
      <h3 className="title">Choose Your Skills</h3>
      <div className="content-center mt-4">
        Single Selector:
        <Select
          options={options}
          value={value2}
          onChange={(o) => setValue2(o)}
        />
        Multiple Selector:
        <Select
          multiple
          options={options}
          value={value1}
          onChange={(o) => setValue1(o)}
        />
      </div>
    </>
  );
}

export default App;
