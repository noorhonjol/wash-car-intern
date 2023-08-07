/* eslint-disable react/prop-types */

import TextField from "@mui/material/TextField";
import { useField } from "formik";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, MenuItem } from "@mui/material";

const InputField = ({defaultOption,options, label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  let Input;
  
  switch (props.type) {
    case "password":
      Input = (<div>
        <FormControl variant="outlined" fullWidth {...props}
            error={meta.touched}>
      
          <InputLabel htmlFor="ss">{label}</InputLabel>
          <OutlinedInput
            {...field} 
            label={label}
            fullWidth
            type={showPassword ? "text" : "password"}         
            endAdornment={              
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end" onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="outlined-weight-helper-text">{meta.error}</FormHelperText>
        </FormControl>
        </div>
      );
      break;
    case "text":
      Input = (
        <TextField
          label={label}
          {...props}
          {...field}
          fullWidth
          error={meta.touched}
          helperText={meta.error}
        />
      );
      break;
      case "select":
        
        Input=(
        <TextField
        fullWidth
        select
        label={label}
        helperText={meta.error}
        defaultValue={defaultOption}
      >
        {options.map((option) => (
          
          <MenuItem key={option.id}name={props.name} value={option.id} >
            {option.vehicle_type}
          </MenuItem>
        ))}
        </TextField>
        )
  }

  return <div>{Input}</div>;
};
export default InputField;
