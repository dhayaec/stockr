import React from 'react'
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from 'react-icons/bs'

type AccordionLayoutProps = {
  title: string
  children: React.ReactElement
  index: number
  activeIndex: number
  setActiveIndex: (i: number) => void
}

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: AccordionLayoutProps) => {
  const handleSetIndex = (i: number) => activeIndex !== i && setActiveIndex(i)

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className='mt-2 flex w-full cursor-pointer justify-between rounded bg-gray-400 p-2'
      >
        <div className='flex'>
          <div className='font-bold text-white'>{title}</div>
        </div>
        <div className='flex items-center justify-center'>
          {activeIndex === index ? (
            <BsFillArrowDownCircleFill className='h-8 w-8 text-gray-200' />
          ) : (
            <BsFillArrowUpCircleFill className='h-8 w-8 text-gray-200' />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div className='shadow-3xl mb-6 rounded-2xl border-b-2 border-l border-r p-4 shadow-cyan-500/50'>
          {children}
        </div>
      )}
    </>
  )
}

export default AccordionLayout
