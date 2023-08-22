"use client";

import React, { useState } from 'react'
import Hamburger from "hamburger-react"
import styles from "./styles/Navbar.module.css";

const NavbarClient = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <div className='flex justify-between'>
        <div>
        </div>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  )
}

export default NavbarClient