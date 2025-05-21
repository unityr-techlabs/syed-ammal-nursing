import { motion , useInView} from 'framer-motion'
import React, { useRef } from 'react'

const ToUp = ({children,className,delay=.1,scale=1,opacity=0,duration=.5}) => {

  const scrollref = useRef(null)
  const scrollView = useInView(scrollref,{once:false})

  return (
    <motion.div
    ref={scrollref}
    initial={{opacity:opacity,scale:scale,y:10}}
    animate={{opacity:scrollView?1:opacity,scale:scrollView?1:scale,y:scrollView?0:10}}
    transition={{duration:duration,delay:delay}}
    className={`${className}`}
    >
      {children}
    </motion.div>
  )
}

export default ToUp