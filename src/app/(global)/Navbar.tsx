"use client";

import React, { useState } from 'react'
import Hamburger from "hamburger-react"
// @ts-ignore
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='flex justify-between'>
      <div>
        Logo
      </div>
      <div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  )
}

export default Navbar