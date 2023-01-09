import React from 'react'

const Line = (props) => {
  const {width, className} = props
  const classes = `w-${width} h-0 bg-black border-y border-black absolute duration-200 ${className}` 

  return (
    <div className={classes}></div>
  )
}

Line.defaultProps = {
  width: "5"
}

export default Line