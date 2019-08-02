import React from "react";


const NasaPhoto = ({url})=> {
    return(
        <div className = "nasa-photo">
            <img src={url} alt="nasaPhoto"/>
        </div>
    )
}
export default NasaPhoto