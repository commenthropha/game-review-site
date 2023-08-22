import Link from 'next/link'
import React from 'react'

const NavbarLink = ({text, href}: {text: string, href: string}) => {
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