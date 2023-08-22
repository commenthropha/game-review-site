import React from 'react'
import Hamburger from "hamburger-react"
// @ts-ignore
import { elastic as Menu } from 'react-burger-menu'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div>
        Logo
      </div>
      <div>
        Menu
      </div>
    </div>
  )
}

export default Navbar