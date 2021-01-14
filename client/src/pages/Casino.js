import React from "react";
import GamingTable from "../components/GamingTable";
import $ from "jquery";

function Casino() {
    function init() {
        //make sure the user is logged in
        $.get("/api/user_data")
        .then((userData)=>{
            console.log(userData)
            if(!userData.email){
                window.location.replace("/login");
            }
            else{
                console.log("You're logged in!");
            }
        })
    }

    init();

    return (
        // Navbar will go here
        <GamingTable />
        // Footer will go here
    )
}

export default Casino;