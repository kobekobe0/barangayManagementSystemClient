import React from "react"; // We only need React here

const InputField = React.memo(({ label, value, onChange, width }) => {
  // Remove console.log for production (optional)
  console.log("InputField rendered", label, value, width);

  return (
    <input
      className={`${width} border px-2 py-1 text-lg`}
      type="text"
      placeholder={label}
      onChange={onChange}
      value={value || ''} // Set default value if undefined
    />
  );
}, (prevProps, nextProps) => prevProps.value === nextProps.value); // Compare values

export default InputField;