import * as React from 'react';
import { useSelector } from 'react-redux';
function Home(){
    
    //const [data,setData]=React.useState([])
    /*React.useEffect(()=>{
        axios.get("http://localhost:8080/api_nube/v1/user?username=flixromer443&password=f1e2l3i4")
        .then(res=>{
        setData(res.data)
        
    })
    },[])*/
    const data2=useSelector(state=>state.SesionReducer)
    const session=data2.session
   return(
        <div style={{marginTop:300}}>
            {session&&<h1>home</h1>}
            
        </div>
   );   
}
export default Home;