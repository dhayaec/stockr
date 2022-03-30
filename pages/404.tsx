import React from 'react'
import MetaHeader from '../src/components/common/MetaHeader'

export default function _404() {
  return (
    <div>
      <MetaHeader title='Not Found' />
      <div className='flex flex-col justify-center px-2'>
        <div className='text-4xl text-red-500'>404</div>
        <div>
          <p>Oops! The page is not found.</p>
        </div>
      </div>
    </div>
  )
}
