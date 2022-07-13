import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Input = ({name, handleChange, label, autoFocus, type, handleShowPassword, half }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
       <TextField 
         name={name}
         onChange={handleChange}
         variant='outlined'
         required
         fullWidth
         label={label}
         autoFocus={autoFocus}
         type={type}
         InputProps={name === 'password' ? {
           endAdornment: (
             <InputAdornment position='end'>
               <IconButton onClick={handleShowPassword}>
                 {type === 'password' ? <Visibility /> : <VisibilityOff />}
               </IconButton>
             </InputAdornment>
           ),
         } : null } 
       />
    </Grid>
  )
}

{/*
const Input = ({toggle_password, handleChange, values }) => {
  return (
    <TextField
  margin = "normal"
  required
  fullWidth
  name = "password"
  label = "Password"
  type = { toggle_password ? "text" : "password" }
  id = "password"
  size = "small"
  autoComplete = "current-password"
  onChange = { handleChange }
  value = { values.password }
  InputProps = {
  {
    endAdornment: ( 
    <InputAdornment position="end"> {
        toggle_password ? ( 
        <Visibility className = "cursor_pointer"
          onClick = {
            this.togglePasswordHide
          }
          />
        ) : ( 
        <VisibilityOff onClick = {
            this.togglePasswordHide
          }
          />
        )
      } 
      </InputAdornment>
    ),
  }
}
/>
  )
}
*/}


export default Input