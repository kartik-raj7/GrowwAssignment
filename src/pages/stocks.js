import TopBar from '@/components/TopBar/topBar'
import { fetchImageDetailsASync, fetchStockDetailsAsync, setData } from '@/redux/api/stockdetails';
import { apiRouter } from '@/services/apiRouter';
import Container from '@/utils/Container';
import LineChartComponent from '@/components/LineChartComponent/LineChartComponent';
import dailydata from '@/components/LineChartComponent/dailydata';
import monthlydata from '@/components/LineChartComponent/monthlydata';
import weeklydata from '@/components/LineChartComponent/weeklydata';
import Tag from '@/utils/Tag';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StockInfoContainer from '@/components/StockInfoContainer/StockInfoContainer';
import overviewdata from '@/components/LineChartComponent/overview';
import StockHeaderDiv from '@/components/StockHeader/StockHeaderDiv';
import ToggleSwitch from '@/utils/ToggleSwitches';
import LoadingSpinner from '@/utils/Loader';
import ErrorPage from './404';
// import { FetchStockdata } from './api/FetchStockData';
const Stocks = () => {
    function FetchStockdata(ticker){
        if(stock_details[ticker]){
             return;
        }
        else{
        let data={
            function:apiRouter.OVERVIEW,
            Symbol:ticker
          }
          let chartdatadaily={
              function:apiRouter.DAILY,
              Symbol:ticker
          }
          let chartdatamonthly={
              function:apiRouter.MONTHLY,
              Symbol:ticker
          }
          let chartdataweekly={
              function:apiRouter.WEEKLY,
              Symbol:ticker
          }
          dispatch(fetchStockDetailsAsync(data,"overview",ticker));
          dispatch(fetchImageDetailsASync({ticker,image:true},"image",ticker));
          dispatch(fetchStockDetailsAsync(chartdatadaily,"daily",ticker));
          dispatch(fetchStockDetailsAsync(chartdatamonthly,"monthly",ticker));
          dispatch(fetchStockDetailsAsync(chartdataweekly,"weekly",ticker));
        }
    }
    function getFilteredData(time){
        const getFormattedToday = () => {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          };  
          const todayFormatted = getFormattedToday();   
          const monthsAgo = new Date();
          monthsAgo.setMonth(monthsAgo.getMonth() - time);
          const filteredData = {};
          Object.entries(weeklydata['Weekly Adjusted Time Series']).some(([dateString, data]) => {
            if (dateString >= monthsAgo.toISOString().split('T')[0] && dateString <= todayFormatted) {
              filteredData[dateString] = data;
            } else if (dateString > todayFormatted) {
              return true;
            }
            return false;
          });
        return {
            "Meta Data": {
                "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
                "2. Symbol": "IBM",
                "3. Last Refreshed": "2023-10-27",
                "4. Time Zone": "US/Eastern"
            },
            filteredData}
    }
    const dispatch = useDispatch();
    const [chartdata,setchartdata] = useState(null);
    const router = useRouter();
    const { loading, error,stock_details} = useSelector((state) => state.stockData);
    const {ticker} = router.query;
    const symbol = ticker;
    const [chartfreq,setchartfreq] = useState('1D');
    const handleToggle = (selectedOption) => {
        setchartfreq(selectedOption)
      };
    const options = ['1D', '1W', '1M','3M','6M','1Y'];
    useEffect(() => {
        FetchStockdata(ticker);
        setchartdata(stock_details[ticker]?.daily)
    }, [dispatch]);
    useEffect(()=>{
      if(chartfreq==='1D'){
        setchartdata(dailydata)
        }
      else if(chartfreq==='1W'){
        setchartdata(weeklydata);
        }
      else if(chartfreq==='1M'){
        setchartdata(monthlydata);
        }
    else if(chartfreq==='3M'){
        if(stock_details[ticker].quarterly){
            setchartdata(stock_details[ticker].quarterly);
        }
        else{
             let type = 'quarterly'
             setchartdata(getFilteredData(3));
            dispatch(setData({ symbol, type, data:  getFilteredData(3)}));

        }
    }
    else if(chartfreq==='6M'){
        if(stock_details[ticker].halfyear){
            setchartdata(stock_details[ticker].halfyear);
        }
        else{
             let type = 'halfyear'
             setchartdata(getFilteredData(6));
            dispatch(setData({ symbol, type, data:  getFilteredData(6)}));
        }
    }
    else if(chartfreq==='1Y'){
        if(stock_details[ticker].yearly){
            setchartdata(stock_details[ticker].yearly);
        }
        else{
             let type = 'yearly'
             setchartdata(getFilteredData(12));
            dispatch(setData({ symbol, type, data:  getFilteredData(12)}));
        }
    }
    },[chartfreq])
    function displayStockDetailsPage(){
        if(loading){
            return <LoadingSpinner/>
          }
          else if(error){
            return <ErrorPage/>
          }
          else return(
            <div>
            <TopBar/>
            <div className='flex align-center justify-center '>
            <div className='w-80'>
            <div className='pt-1'>
            <StockHeaderDiv data={stock_details[ticker]?.image}/>
            </div>
            <Container>
            {chartdata&&<LineChartComponent data={chartdata}/>}
            <ToggleSwitch options={options} onToggle={handleToggle}/>
            </Container>
{/*             
             {stock_details[ticker]?.overviewdata&&<StockInfoContainer data={stock_details[ticker]?.overviewdata}/>} */}
            <StockInfoContainer data={overviewdata}/>
            </div>
            </div>
            </div>
          )
    }
  return (
    <div>
      {displayStockDetailsPage()}
    </div>
  )
}

export default Stocks