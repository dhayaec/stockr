import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { menuItems } from '../../constants/constants'
import { NavLink } from '../common/NavLink'

function NavBar() {
  return (
    <nav className='bg-white'>
      <div className='m-2 flex flex-col justify-center md:flex-row md:justify-between'>
        <div>
          <Link href='/'>
            <a className='flex-shrink-0'>
              <Image
                className='h-8 w-8'
                src='/vercel.svg'
                alt='Workflow'
                width={100}
                height={50}
              />
            </a>
          </Link>
        </div>
        <div>
          <ul className='inline-flex items-center'>
            {menuItems.map((i) => {
              return (
                <li key={i.id} className='text-black-500 hover:text-black-800'>
                  <NavLink href={i.href} replace={i.href === '/'}>
                    <a className='cursor-pointer rounded-md py-2 px-4'>
                      {i.name}
                    </a>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
