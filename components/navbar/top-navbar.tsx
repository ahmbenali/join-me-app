'use client'

import navItems from '@/lib/constants'
import {Button} from '@heroui/button'
import {Navbar, NavbarBrand, NavbarContent} from '@heroui/navbar'
import Link from 'next/link'
import {GiSelfLove} from 'react-icons/gi'
import NavLink from './nav-link'

function TopNavbar() {
  return (
    <Navbar
      maxWidth="full"
      className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-600"
      classNames={{
        item: [
          'text-xl',
          'text-gray-300',
          'uppercase',
          'data-[active=true]:text-cyan-400',
        ],
      }}
    >
      <NavbarBrand
        as={Link}
        href="/"
      >
        <GiSelfLove
          size={40}
          className="text-gray-200"
        />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-200">JoinMe</span>
        </div>
      </NavbarBrand>

      <NavbarContent justify="center">
        {navItems.map(({href, label}) => (
          <NavLink
            key={href}
            href={href}
            label={label}
          />
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <>
          <Button
            as={Link}
            href="/login"
            variant="bordered"
            className="text-white"
          >
            Login
          </Button>
          <Button
            as={Link}
            href="/register"
            variant="bordered"
            className="text-white"
          >
            Register
          </Button>
        </>
      </NavbarContent>
    </Navbar>
  )
}

export default TopNavbar
