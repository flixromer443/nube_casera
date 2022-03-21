import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {change} from "../redux/actions/Actions"
export default function BottomNavBar() {
  const navigate=useNavigate()
  const changePage=(path)=>{
      dispatch(change(path))
      if(path==="home"){
        navigate("/")
      }else{
        navigate("/"+path)
      }
      
    
  }
  const [value, setValue] = React.useState(0);
  const dispatch=useDispatch()
  return (
    <Box sx={{ width: 500 }}>
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
    </Box>
  );
}
