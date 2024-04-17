import React, { useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = React.useRef(null);
    const Data = [
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero..', 
            filesize: '.9mb', 
            close: false, 
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'blue'
            }
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            filesize: '.4mb', 
            close: false, 
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'blue'
            }
        },
        {
            desc: 'Hello World, this is a test file.', 
            filesize: '.7mb', 
            close: true, 
            tag: {
                isOpen: true,
                tagTitle: 'Upload',
                tagColor: 'green'
            }
        },
    ]
  return (
      <div ref={ref} className='p-5 fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap'>
        {Data.map((item, index) =>(
            <Card data = {item} reference = {ref}/>
        ) )}
      </div>
  )
}

export default Foreground
