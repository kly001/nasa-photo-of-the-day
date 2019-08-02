import React from "react";


const NasaPhoto = (props)=> {
    return(
        <div className = "nasa-photo">
            <h3>PHOTO:</h3>
            <img src="https://apod.nasa.gov/apod/image/1908/g292chandra.jpg" alt="APOD">{props.hdurl}</img>
        </div>
    )
}
export default NasaPhoto