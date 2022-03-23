import * as React from 'react';
import { useSelector } from 'react-redux';
import EmptyPhotos from '../components/childrens/EmptyPhotos';
function Fotos(){
  const data2=useSelector(state=>state.SesionReducer)
  const session=data2.session
   return(
    <div style={{marginTop:300}}>
       {session&&
        <EmptyPhotos/>
       }
   </div>
   );   

  /* background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;*/
}
export default Fotos;