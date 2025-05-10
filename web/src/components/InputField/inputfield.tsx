import { TextField } from "@mui/material";
import { Control } from "react-hook-form";

interface InputFieldProps {
  control: Control<any>;
  name: string;
  type?: string;
  placeholder?: string;
}

const InputField = ({
  control,
  name,
  type = "text",
  placeholder,
}: InputFieldProps) => {
  return (
    <TextField
      {...control.register(name)} // Register the field using control.register
      sx={{ width: "400px", paddingBottom: "20px" }}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;
