/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

const InputField = ({label,...props})=> {

  const[field,meta]=useField(props);

  return (
    <div>
      <TextField 
        label={label}
        {...props}
        {...field}
        fullWidth
        error={meta.touched}
        helperText={meta.error}
      />
    </div>
  )
}
export default InputField