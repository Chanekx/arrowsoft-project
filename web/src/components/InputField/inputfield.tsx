import { SxProps, TextField } from "@mui/material";
import { Control } from "react-hook-form";
interface InputFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
  name?: string;
  type: string;
  label: string;
  required?: boolean;
  sx?: SxProps;
  defaultValue: string | null
}
const InputField = ({ control, name, type, label,sx }: InputFieldProps) => {
    const  defaultSx: SxProps = {
        width:'80%',
        paddingBottom:"20px",
    }
    const combinedSx = {...defaultSx, ...sx}
  return (
    <TextField
      value={control}
      name={name}
      type={type}
      label={label}
      sx={combinedSx}
      
    ></TextField>
  );
};
export default InputField;
