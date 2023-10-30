import Image from 'next/image'
import React from 'react'
import style from './stockheader.module.scss'
const StockHeaderDiv = ({data}) => {
const stockdata = data?data[0]:'';
  return (
    <>
    {data.length>1&&
    <div className='flex justify-between'>
     <div className='flex'>
      <div className={style.companyimageborder}>
      <Image width={40} height={40} src={stockdata?.image} className={style.companyimage} alt="stock-image"/>
      </div>
      <div className={`flex flex-column ${style.companyname} justify-center`}>
      <div className={style.companytitle}>{stockdata?.companyName}</div>
      <div className={style.companytitle}>{stockdata?.symbol}</div>
      </div>
     </div>
     <div className={style.pricediv}>
       <div className={style.companytitle}>${stockdata?.price}</div>
      </div>
    </div>}
    </>
  )
}

export default StockHeaderDiv