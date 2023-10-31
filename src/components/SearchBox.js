import React from "react";

const SearchBox = ({searchChange}) => {

    return(
        <div>
            <input className="pa3 ba b--green bg-lightest-blue ma3" onChange={searchChange} type="text" placeholder = "search robots" />
        </div>
    )
}

export default SearchBox