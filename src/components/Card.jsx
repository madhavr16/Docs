import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';


function Card({data, reference}) {
  return (
    <motion.div 
      drag 
      dragConstraints={reference} 
      whileDrag={{scale : 1.1}}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      className='relative flex-shrinl-0 w-48 h-60 rounded-[30px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-xs mt-5 leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full h-13 left-0'>
            <div className='flex items-center px-8 py-3 justify-between mb-2'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                  {data.close? <IoClose size=".8em" color='#fff'/> : <MdOutlineFileDownload size=".8em" color='#fff'/>}
                </span>
            </div>
            {data.tag.isOpen&& (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue"? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )
            }
        </div>
    </motion.div>
  )
}

export default Card
