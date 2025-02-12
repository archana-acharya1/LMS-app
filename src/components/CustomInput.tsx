interface CustomInputProps {
  label: string;
  required?: boolean;
  type?: string;
  setValue: (value: string) => void;
}

export default function CustomInput({
  label,
  required = true,
  type = "text",
  setValue,
}: CustomInputProps) {
  return (
    <div className="grid p-2">
      <label>{label}</label>
      <input
        className="border border-gray-300 rounded w-40"
        required={required}
        type={type}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
