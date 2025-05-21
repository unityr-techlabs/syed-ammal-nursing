import { motion , useInView} from 'framer-motion'
import React, { useRef } from 'react'

const ToLeft = ({children,className,delay=.1,scale=1,opacity=0,duration=.5}) => {

  const scrollref = useRef(null)
  const scrollView = useInView(scrollref,{once:false})

  return (
    <motion.div
    ref={scrollref}
    initial={{opacity:opacity,scale:scale,x:10}}
    animate={{opacity:scrollView?1:opacity,scale:scrollView?1:scale,x:scrollView?0:10}}
    transition={{duration:duration,delay:delay}}
    className={`${className}`}
    >
      {children}
    </motion.div>
  )
}

export default ToLeft