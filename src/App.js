import "./App.css";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState("");
  const [file, setFile] = useState({});
  const [checkbox, setCheckbox] = useState(false);
  const fileRef = useRef(null);
  const checkboxRef = useRef(null);

  const resetHandler = () => {
    setText("");
    setNumber("");
    setEmail("");
    setSelected("");
    setFile({});
    setCheckbox(false);
    fileRef.current.value = null;
    checkboxRef.current.checked = null;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Data sent: ", {
      text,
      number,
      email,
      selected,
      file,
      checkbox,
    });
    resetHandler();
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler} autoComplete="off">
        <Input value={text} setState={setText} />
        <Input value={number} type="number" setState={setNumber} />
        <Input value={email} type="email" setState={setEmail} />
        <Select
          value={selected}
          options={["Option A", "Option B", "Option C"]}
          setState={setSelected}
        />
        <Input inputRef={fileRef} type="file" setState={setFile} />
        <span>
          <Input
            inputRef={checkboxRef}
            type="checkbox"
            setState={setCheckbox}
          />{" "}
          Agree with terms and conditions
        </span>
        <button type="submit">Send data</button>
      </form>
    </div>
  );
}

export default App;
