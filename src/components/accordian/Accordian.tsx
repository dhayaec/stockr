import React, { useState } from 'react'
import AccordionLayout from './AccordionLayout'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <AccordionLayout
        title='Accordion 1'
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <p>This is Accordion 1 Content</p>
      </AccordionLayout>

      <AccordionLayout
        title='Accordion 2'
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <p>This is Accordion 2 Content</p>
      </AccordionLayout>
    </>
  )
}
export default Accordion
