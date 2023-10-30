import Card from '@/utils/Card/StockCard'
import React from 'react'
import style from './cardlistwrapper.module.scss'
import createUrlWithQuery from '@/utils/CreateURLwithQuery'
import {BsChevronDoubleDown} from 'react-icons/bs'
import Button from '@/utils/Button'
import NothingToSeeHere from '../NothingToSee/NothingToSee'
const CardListWrapper = ({data}) => {
  function checkWrapperData(){
    if(data.length<=2){
      return(
        <NothingToSeeHere/>
      )
    }
    else{
      return(
        <>
  
        <div className={style.cardwrapper}>
        {data?.map((item) => {
       const url = createUrlWithQuery('/stocks', { ticker: item.ticker });
       return <Card key={item.id} data={item} url={url} />;
     })}
         </div>
       
         <div className={`${style.loadmore} flex justify-center align-center mt-1 flex-column`}>
         <Button type='link' heading={'Load More'} subtext={<BsChevronDoubleDown/>} color={'#5367ff'} fontweight={'bold'} animation={'bounce'}/>
         </div>
         
        </>
      )
    }
  }
  return (
    <>
       {checkWrapperData()}
       </>
  )
}

export default CardListWrapper