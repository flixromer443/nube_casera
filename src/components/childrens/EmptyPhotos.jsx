import React from "react";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
function EmptyPhotos(){
    return(
        <div style={{color:"grey"}}>
            <PhotoLibraryIcon style={{width:100,height:100}}/>
            <h2>Sin fotos a&uacute;n</h2>
        </div>
    )
}
export default EmptyPhotos