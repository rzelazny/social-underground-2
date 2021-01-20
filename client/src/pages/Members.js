import React from 'react'
import Nav from "../components/Nav/Navbar"
// import $ from "jquery";
import MemberSection from "../components/Members/MemberSection"
import MemberCard from "../components/Members/MemberCard"

function Members() {

  return (
    <>
      <Nav />,
      <MemberSection />
      <MemberCard />
    </>
  )
}
export default Members