function InputField(props) {
  const name = props.name;



  return (
    <div>
      <label htmlFor={name}> Please enter your {name}</label>
      <input name={name} type='text' ></input>
    </div>
  );
}

export default InputField;
