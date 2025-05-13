import { TextField } from "@mui/material";
import { Control } from "react-hook-form";

interface InputFieldProps {
  control: Control<any>;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
}

const InputField = ({
  control,
  name,
  type = "text",
  placeholder,
  label,
}: InputFieldProps) => {
  return (
    <TextField
      {...control.register(name)} // Register the field using control.register
      sx={{ width: "100%" }}
      name={name}
      type={type}
      placeholder={placeholder}
      label={label}
      variant="outlined"
    />
  );
};

export default InputField;
