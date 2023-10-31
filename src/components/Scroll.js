import React from "react";
import './Scroll.css'

const Scroll = (props) => {

    return(
        <div className="scr" id="scrollbar2">  
            {props.children}
        </div>
    )
}
export default Scroll

