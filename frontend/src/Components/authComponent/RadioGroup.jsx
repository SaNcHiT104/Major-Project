import cl from "./Signup.module.css";
function RadioButton({ value, checked, onChange, children }) {
  return (
    <label htmlFor={value} className={cl.x}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        id={value}
        className={cl.y}
      />
      {children}
    </label>
  );
}

function RadioGroup({ options, value, setValue }) {
  return (
    <>
      {options.map((option) => (
        <RadioButton
          key={option}
          value={option}
          checked={option === value}
          onChange={setValue}
        >
          {option}
        </RadioButton>
      ))}
    </>
  );
}

export default RadioGroup;
