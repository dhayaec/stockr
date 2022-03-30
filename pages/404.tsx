import React from 'react'
import MetaHeader from '../src/components/common/MetaHeader'

export default function _404() {
  return (
    <div>
      <MetaHeader title='Not Found' />
      <div className='flex flex-col justify-center px-2'>
        <div className='items-center text-4xl text-red-500'>404</div>
        <div className='ml-2 items-center'>
          <p>Oops! The page is not found.</p>
        </div>
      </div>
    </div>
  )
}
