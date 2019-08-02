import React from "react";


const NasaPhoto = (props)=> {
    return(
        <div className = "nasa-photo">
            <p>PHOTO</p>
            <img src={props.media_type} alt="APOD"/>
        </div>
    )
}
export default NasaPhoto