interface CustomInputProps {
  label: string;
  required?: boolean;
  type?: string;
  setValue: (value: string) => void;
  error?: string;
}

export default function CustomInput({
  label,
  required = true,
  type = "text",
  setValue,
}: CustomInputProps) {

  // const isError = error?.toLowerCase()?.includes(label.toLowerCase());
  // console.log(label, isError)
  return (
    <div className="grid">
      <label>{label}</label>
      <input
        className={`border border-gray-300 rounded w-40}`}
        required={required}
        type={type}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
