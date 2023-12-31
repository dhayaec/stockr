import Image from 'next/image'

function NavBar() {
  return (
    <nav className='flex justify-center bg-white px-2'>
      <Image
        src={'/icon-192x192.png'}
        alt='Stockr'
        width={50}
        height={50}
        className='p-20'
      />
    </nav>
  )
}

export default NavBar
