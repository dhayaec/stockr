import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className='bg-white'>
        <div className='mx-auto max-w-7xl px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className=' flex items-center'>
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
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link href='/#'>
                    <a className='rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 '>
                      Home
                    </a>
                  </Link>
                  <Link href='/#'>
                    <a className='rounded-md px-3  py-2 text-sm font-medium text-gray-800 hover:text-gray-800'>
                      Gallery
                    </a>
                  </Link>
                  <Link href='/#'>
                    <a className='rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 '>
                      Content
                    </a>
                  </Link>
                  <Link href='/#'>
                    <a className='rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 '>
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='ml-4 flex items-center md:ml-6'></div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button className='inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-gray-300 focus:outline-none'>
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='h-8 w-8'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
            <Link href='/#'>
              <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 '>
                Home
              </a>
            </Link>
            <Link href='/#'>
              <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 '>
                Gallery
              </a>
            </Link>
            <Link href='/#'>
              <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 '>
                Content
              </a>
            </Link>
            <Link href='/#'>
              <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 '>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
