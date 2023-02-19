import React from "react";


export default function Submit({handleClick}){
    return(
        <div>
           <input type="submit" value="Send" className="btn" onClick={handleClick}/> 
        </div>
    )
}