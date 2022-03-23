import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {change} from "../redux/actions/Actions"
import AddButton from "../components/childrens/AddButton"

export default function BottomNavBar() {
  const navigate=useNavigate()
  const [display,setDisplay]=React.useState(false)
  const data=useSelector(state=>state.SesionReducer)
  const session=data.session
  const changePage=(path)=>{
      if(path==="home"){
        dispatch(change(path,false))
        setDisplay(false)
        navigate("/")
      }else{
        dispatch(change(path,true))
        navigate("/"+path)
        setDisplay(true)
      }
      
    
  }
  const [value, setValue] = React.useState(0);
  const dispatch=useDispatch()
  return (
    <Box sx={{ width:500}} >
      
     
      <AddButton display={display} />
      {session&& <>
      <BottomNavigation
        
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        
         
          <BottomNavigationAction onClick={()=>changePage("home")}  label="Inicio" icon={<HomeIcon />}/>
        <BottomNavigationAction onClick={()=>changePage("archivos")} label="Archivos" icon={<FolderIcon />} />
        <BottomNavigationAction onClick={()=>changePage("fotos")}  label="Fotos" icon={<ImageIcon />} />
          
      </BottomNavigation>
      </>
    }
      
    </Box>
  );
}
