export const Input = ({ type = "text", setState, value, inputRef }) => {
  const inputHandler = (e) => {
    setState(e.target.value);
  };

  const checkboxHandler = (e) => {
    setState(e.target.checked);
  };

  const fileHandler = (e) => {
    setState(e.target.files[0]);
  };

  return type === "file" ? (
    <input ref={inputRef} type={type} name={type} onChange={fileHandler} />
  ) : type === "checkbox" ? (
    <input ref={inputRef} type={type} name={type} onChange={checkboxHandler} />
  ) : (
    <input value={value} type={type} name={type} onChange={inputHandler} />
  );
};
