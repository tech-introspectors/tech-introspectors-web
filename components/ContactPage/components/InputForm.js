const InputForm = ({ placeholder, name }) => {
  return (
    <div className="w-full mb-4">
      <input
        className="inputForm"
        type="text"
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputForm;
