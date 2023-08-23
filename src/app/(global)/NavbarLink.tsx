import Link from 'next/link'
import React from 'react'

/* 
 * Created a separate component for the Navbar
 * links to improve reusability and avoid repitition 
 */
const NavbarLink = ({
  text, // The text to display for the link element
  href // Link to redirect to when clicked
}: {
  text: string, 
  href: string
}) => {
  return (
    <Link
    href= {href}
    className="has-text-weight-semibold has-text-white"
  >
    {text}
  </Link>
  )
}

export default NavbarLink