import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {displayLoginForm, sessionStart} from '../../redux/actions/Actions'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function LoginForm() {
  const [buttonStatus,setButtonStatus]=useState(true)
  const classes = useStyles();
  const [data,setData]=useState({username:'', password:''})
  const [error,setError]=useState(false)
  const data2=useSelector(state=>state.AcountFormsReducer)
  const handleChange=(event)=>{
    setError(false)
    event.preventDefault()
    if(data.username.length>10 && data.password.length>5){
      setButtonStatus(false)
      
    }else{
      setButtonStatus(true)
    }
    setData({
      ...data,
      [event.target.name]:event.target.value
    })
  }
  const dispatch=useDispatch()
  const  handleSubmit = async (event)=>{
    event.preventDefault()
      if(data2.form===true){
              const res= await axios.get(`http://localhost:8080/api_nube/v1/user?username=${data.username}&password=${data.password}`)
              const datos=await res.data
              if(datos.length==0){
                setError(true)
                
              }else{
                
                datos.map(d=>{
                  const payload={
                    session:true,
                    uid:d.id,
                    username:d.username,
                    password:d.password
                  }
                  dispatch(sessionStart(payload))
                })
              }
    
      }else{
        const res= await axios.post('http://localhost:8080/api_nube/v1/users',data)
        const datos= await res.data
        alert("su cuenta ha sido creada con exito")
        dispatch(displayLoginForm());
      }
  }
  return (
   <div>
        <h1>{data2.form?<>Iniciar Sesi&oacute;n</>:<>Registrarse</>} </h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField type="email" name='username' label="***@gmail.com" error={error} onChange={handleChange} id="filled-size-normal"  variant="filled" />
        <br />
        <TextField type="password" name='password' label="contraseña" error={error} onChange={handleChange} id="filled-size-normal"  variant="filled" />
        <br /><br />
        <Button  onClick={handleSubmit} variant="contained" size='large' color="primary" disabled={buttonStatus} >Confirmar</Button>
    </form>
   </div>
  );
}
