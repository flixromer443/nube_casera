import React from "react";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
function EmptyFiles(){
    return(
        <div style={{color:"grey"}}>
            <FolderCopyIcon style={{width:100,height:100}}/>
            <h2>Sin archivos a&uacute;n</h2>
         </div>
    )
}
export default EmptyFiles