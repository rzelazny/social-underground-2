import React from 'react'
import Nav from "../components/Nav/Navbar"
import MemberSection from "../components/Members/MemberSection"
import MemberCard from "../components/Members/MemberCard"

function Members() {

  return (
    <div id="members-main">
      <Nav />,
      <MemberSection />
      <MemberCard />
    </div>
  )
}
export default Members