import React, { useEffect } from 'react'
import TopBar from '@/components/TopBar/topBar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync } from '@/redux/api/gainerLosers';
import TabPane from '@/utils/TabPane/TabPane';
import { PiChartLineDownThin, PiChartLineUpThin } from 'react-icons/pi';
import CardListWrapper from '@/components/CardListComponent/CardListWrapper';
import { apiRouter } from '@/services/apiRouter';
import LoadingSpinner from '@/utils/Loader';
import { useRouter } from 'next/router';

const Homepage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
const ErrorPage = () => {
    router.push('/404');
  };
    const { loading, error, topgainers,toplosers,lastupdated } = useSelector((state) => state.data);
    const tabs = [
      {
        id: 'tab1',
        label: (
          <>
            Top Gainers <PiChartLineUpThin />
          </>
        ),
        content: <CardListWrapper data={topgainers?topgainers:[]}/>,
      },
      {
        id: 'tab2',
        label: (
          <>
            Top Losers <PiChartLineDownThin />
          </>
        ),
        content: <CardListWrapper data={toplosers?toplosers:[]}/>,
      },
    ];
    function displayHomepage(){
        if(loading){
          return <LoadingSpinner/>
        }
        else if(error){
          return <ErrorPage/>
        }
        else return(
          <>
          <TopBar/>
          <div className='flex justify-center align-center pt-1'>
          <TabPane tabs={tabs}/>
          </div>
          </>
        )
    }
    useEffect(() => {
      if(topgainers&&toplosers){
        return;
      }
      let data={
        function:apiRouter.TOP_GAINERS,
      }
      dispatch(fetchDataAsync(data));
    }, [dispatch,topgainers,toplosers]);
  return (
    <div>
         {displayHomepage()}
    </div>
  )
}

export default Homepage