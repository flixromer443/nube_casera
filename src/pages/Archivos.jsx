import * as React from 'react';
import { useSelector } from 'react-redux';
import EmptyFiles from '../components/childrens/EmptyFiles';

function Archivos(){
 const data=useSelector(state=>state.SesionReducer)
 const session=data.session
   return(
        <div style={{marginTop:300}}>
            {session&&
             <EmptyFiles/>
            }
        </div>
   );   
}
export default Archivos;