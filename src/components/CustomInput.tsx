interface CustomInputProps {
  label: string;
  required?: boolean;
  type?: string;
  error?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function CustomInput({
  label,
  required = true,
  type = "text",
  name,
  value,
  onChange,
  disabled = false,
}: CustomInputProps) {
  return (
    <div className="grid">
      <label>{label}</label>
      <input
        className="border border-gray-300 rounded w-full px-2 py-1 disabled:bg-gray-200"
        required={required}
        type={type}
        name={name || label.toLowerCase()}
        value={value}
        onChange={onChange}
        disabled={disabled} // Controls whether the field is editable
      />
    </div>
  );
}