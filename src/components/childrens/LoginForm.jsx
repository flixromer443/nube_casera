import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [data,setData]=useState({username:'', password:''})
  const [response,setResponse]=useState([])
  const handleChange=(event)=>{
    event.preventDefault()
    setData({
      ...data,
      [event.target.name]:event.target.value
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    axios.get(`http://localhost:8080/api_nube/v1/user?username=${data.username}&password=${data.password}`)
    .then(res=>setResponse(res.data))
    .catch(error=>{
      console.error(error)
    })
    console.log(response)
  }
  return (
   <div>
        <h1>Iniciar Sesi&oacute;n</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField type="email" name='username' label="***@gmail.com" onChange={handleChange} id="filled-size-normal"  variant="filled" />
        <br />
        <TextField type="password" name='password' label="contraseña" onChange={handleChange} id="filled-size-normal"  variant="filled" />
        <br /><br />
        <Button  onClick={handleSubmit} variant="contained" size='large' color='primary'>Confirmar</Button>
    </form>
   </div>
  );
}
