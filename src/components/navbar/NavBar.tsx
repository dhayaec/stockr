import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { menuItems } from '../../constants/constants'
import { NavLink } from '../common/NavLink'
import { ArrowRight, HomeIcon } from '../icons/Icons'

function NavBar() {
  return (
    <nav className='bg-white px-2'>
      <div className='flex flex-col justify-center md:flex-row md:justify-between'>
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
        <div className='self-start md:self-center'>
          <ul className='inline-flex items-center'>
            {menuItems.map((i) => {
              return (
                <li key={i.id} className='text-black-500 hover:text-black-800'>
                  <NavLink href={i.href}>
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
      <div className='my-4'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
            <li className='inline-flex items-center'>
              <a
                href='#'
                className='inline-flex items-center font-medium text-gray-700 hover:text-gray-900'
              >
                <HomeIcon />
                Home
              </a>
            </li>
            <li>
              <div className='flex items-center'>
                <ArrowRight />
                <a
                  href='#'
                  className='ml-1 font-medium text-gray-700 hover:text-gray-900 md:ml-2'
                >
                  Projects
                </a>
              </div>
            </li>
            <li aria-current='page'>
              <div className='flex items-center'>
                <ArrowRight />
                <span className='ml-1 font-medium text-gray-400 md:ml-2'>
                  Flowbite
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  )
}

export default NavBar
