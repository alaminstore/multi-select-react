import { useState } from "react";
import Select from "./Select";

const options = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
  { label: "Four", value: 4 },
];

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  return (
    <>
      <Select
        options={options}
        value={value}
        onChange={(option) => setValue(option)}
      />
    </>
  );
}

export default App;
