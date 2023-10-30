import React from "react";
import './Scroll.css'
// scroll it not itself a comp to render, we want to say just render the children present inside scroll i.e cardlist
// const Scroll = (props) => {
//     return(<h1>Hello</h1>)    // cardlist render jo hunna websiite ma , hello matra dekhinxa
// }

// scroll get  props as argument and it can access cardlist by props.children 
const Scroll = (props) => {
    // console.log(props)
    // console.log(props.children)
    // i can use scrollable css to the div
    return(
        <div className="scr" id="scrollbar2">  
            {props.children}
        </div>
    )
}
export default Scroll

// now i can use this scrollbar facility in any component that i wish, so this is beauty of react, no reusability