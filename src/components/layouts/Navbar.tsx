import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
   <nav className='flex items-center bg-pink-300  text-xl text-white justify-between py-4 px-8'>
    <h1>Logo</h1>
    <ul className='flex items-center  gap-5'>

      <li>
    <Link href={"/"}>
    Home
    </Link>
      </li>

      <li>
    <Link href={"/about"}>
    About
    </Link>
      </li>

      <li>
    <Link href={"/login"}>
    Login
    </Link>
      </li>

      <li>
    <Link href={"/register"}>
   Register
    </Link>
      </li>

    </ul>
   </nav>
  )
}

export default Navbar
