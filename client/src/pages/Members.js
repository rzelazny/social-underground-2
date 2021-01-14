import React from 'react'
import $ from "jquery";

function Members() {
  return (
    <div>
      <h1 className="members">Members</h1>
    </div>
  )
}

export default Members









$(document).ready(function() {

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  // $.get("/api/user_stat").then (function(data){
  //   $(".card-text-w/l").text(data.gamePoints);
  // });

//creating common utilitize 

});
