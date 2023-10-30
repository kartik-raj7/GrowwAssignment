import React from 'react'
import style from './stockinfocontainer.module.scss'
import Container from '@/utils/ui/Container'
import Tag from '@/utils/ui/Tag'
import Detailcolumn from '@/utils/ui/Detailcolumn'
import Slider from '@/utils/ui/SliderDisplay'
import { formatCurrency } from '@/utils/GetCurrency'
import { getScreenSize } from '@/utils/Screensize'
import CapDetermine from '@/utils/CapDetermine'
const StockInfoContainer = ({data}) => {
let screensize = ''
  function SliderShow(){
    if(screensize!='mobile'){
        return(
            <div className='flex justify-between m-2'>
            <Detailcolumn data={`${data['52WeekLow']}$`} heading={"52 Week Low"} align={'alignleft'}/>
             {/* need to make that api call */}
            <Slider currentPrice={parseFloat(118.71)} low={parseFloat(data['52WeekLow'])} high={parseFloat(data['52WeekHigh'])} />
            <Detailcolumn data={`${data['52WeekHigh']}$`} heading={"52 Week High"} align={'alignright'}/>
            </div> 
        )
    }
    else{
            return(
               
                <div className='flex align-center flex-column'>
                <div className='mx-2_5'>
                <Slider currentPrice={parseFloat(118.71)} low={parseFloat(data['52WeekLow'])} high={parseFloat(data['52WeekHigh'])} />
                </div>
                <div className='flex justify-between w-80'>
                <Detailcolumn data={`${data['52WeekLow']}$`} heading={"52 Week Low"}/>
                 {/* need to make that api call */}
                <Detailcolumn data={`${data['52WeekHigh']}$`} heading={"52 Week High"}/>
                </div> 
                </div>
                
            )
        }
  }
  return (
    
    <div>
        {Object.keys(data).length>2&&
        <Container>
        <div className={`flex justify-between ${style.stockheadingdiv}`}>
        <div className={style.stockheading}>About {data?.Name}</div>  <Tag text={CapDetermine(data['MarketCapitalization'])} color={'#5367FF'} textcolor={'white'}/>
        </div>
        <div className={style.stockdescription}>
            {data?.Description}
        </div>
        <div className='flex mx-1'>
        <Tag text={`INDUSTRY: ${data?.Industry}`} color={'#66e3c4'} textcolor={'#484848'}/>
            <Tag text={`SECTOR: ${data?.Sector}`} color={'#66e3c4'}  textcolor={'#484848'}/>
            </div>  
         <SliderShow/>
        <div className={`flex justify-between m-2 ${style.stockfundamentals}`}> 
        <Detailcolumn data={`${formatCurrency(data['MarketCapitalization'])}$`} heading={"Market Capitalization"} color={'#5367FF'}/>
        <Detailcolumn data={data['PERatio']} heading={"PE Ratio"} color={'#5367FF'}/>
        <Detailcolumn data={data['Beta']} heading={"Beta"} color={'#5367FF'}/>
        <Detailcolumn data={data['DividendYield']} heading={"Dividend Yield"} color={'#5367FF'}/>
        <Detailcolumn data={data['ProfitMargin']} heading={"Profit Margin"} color={'#5367FF'}/>
        </div>
            
        </Container>}
    </div>
  )
}

export default StockInfoContainer