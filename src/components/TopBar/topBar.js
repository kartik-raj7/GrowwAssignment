import React, { useEffect, useState } from 'react'
import InputField from '../../utils/InputField/SearchField'
import style from './topbarstyle.module.scss'
import Image from 'next/image'
import { BiSearch } from 'react-icons/bi'
import { apiRouter } from '@/services/apiRouter'
import { axiosGet } from '@/pages/api/ApiService'
import searchresult from '../LineChartComponent/searchresult'
import { useRouter } from 'next/router'
import createUrlWithQuery from '@/utils/CreateURLwithQuery'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '@/redux/api/gainerLosers'
import DarkModeToggle from '../ToggleDark/ToggleDark'
const TopBar = ({error}) => {
  const [inputValue, setInputValue] = useState();
  const stockdata = useSelector((state) => state.data);
  const [searchresultdata,setsearchresultData] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  function redirectHome(){
    router.push('/homepage')
  }
  const searchSuggestions =(inputValue)=>{
    let data={
      function:apiRouter.SEARCH,
      keywords:inputValue
    }
    async function fetchData() {
      try {
        const result = await axiosGet(data)
        if(result){
          setsearchresultData(result)
          console.log(result)
        }
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }
  const handleChange = (inputValue) => {
    setInputValue(inputValue)
   
    searchSuggestions(inputValue)
  };
  const redirectstockDetailsPage=(value)=>{
    let symbol = value['2. name'];
    let type = 'suggested_stocks';
    let suggestedStocks = stockdata?.suggested_stocks;
    if (!suggestedStocks?.some(stock => stock['2. name'] === symbol||!suggestedStocks)) {
      let newSuggestedStocks;
      if(!suggestedStocks){
        newSuggestedStocks = [value];
      }
      else{
        newSuggestedStocks = [...suggestedStocks,value];
      }
      dispatch(setData({suggested_stocks: newSuggestedStocks }));
      setInputValue(value['2. name']);
    }
      setInputValue(value['2. name']);
      let tickersymbol = value['1. symbol'];
      let url = createUrlWithQuery('/stocks', { ticker: tickersymbol });
      router.push(url);
  };
  const handleSearch = (input)=>{
    
  }
  return (
  <div className='glass-effect flex align-center justify-center position-sticky z-100'>
<div className='flex align-left justify-between w-80'>
  <div className='flex align-center justify-center'>
  <Image
    src="https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/groww-logo-light.svg"
    className={`${style.logostyle} cursor`}
    alt="Groww Logo"
    width={150}
    height={50}
    onClick={redirectHome}
  />
 
</div>   
{!error&&
<>
    <InputField
        type="text"
        value={inputValue}
        placeholder='Lets Find you awesome investments'
        label="Name"
        onChange={handleChange}
        logo={<BiSearch/>}
        handleSearch={handleSearch}
        redirectstockDetailsPage={redirectstockDetailsPage}
        data={searchresultdata?searchresultdata:[]}
      />
  <div className='flex justify-center align-center'>
    <DarkModeToggle/>
      </div>
      </>}
      </div>
      </div>
  )
}

export default TopBar
