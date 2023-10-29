import React from 'react'

const Detailcolumn = ({data,heading,color}) => {
  return (
    <div className='flex flex-column'>
        <div style={{color:color}}>{heading}</div>
        <div>{data}</div>
    </div>
  )
}

export default Detailcolumn