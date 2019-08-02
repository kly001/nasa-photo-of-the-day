import React from "react";


const NasaText = (props)=> {
    return(
        <div className = "nasa-text">
            <h3>DESCRIPTION:</h3>
            <p>{props.explanation}</p>
        </div>     
    )
}
export default NasaText