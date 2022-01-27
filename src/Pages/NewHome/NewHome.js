import React from "react";
import Feeds from "../../Component/Feeds/Feeds";
import Suggestions from "../../Component/Suggestions/Suggestions";
import './NewHome.css';
const NewHome = () =>{
    return (
        <div className="div-newhome">
            <Feeds/>
            <Suggestions/>
        </div>
    )
}

export default NewHome;