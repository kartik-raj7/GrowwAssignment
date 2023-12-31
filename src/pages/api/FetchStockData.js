import React from "react";
import { useDispatch } from "react-redux";
import { apiRouter } from "@/services/apiRouter";
import { fetchImageDetailsASync, fetchStockDetailsAsync } from "@/redux/api/stockdetails";


const FetchStockdata=(ticker)=>{
    const dispatch = useDispatch();
    let data={
        function:apiRouter.OVERVIEW,
        symbol:ticker
      }
      let chartdatadaily={
          function:apiRouter.DAILY,
          symbol:ticker
      }
      let chartdatamonthly={
          function:apiRouter.MONTHLY,
          symbol:ticker
      }
      let chartdataweekly={
          function:apiRouter.WEEKLY,
          symbol:ticker
      }
      dispatch(fetchStockDetailsAsync(data,"overview",ticker));
      dispatch(fetchImageDetailsASync({ticker,image:true},"image",ticker));
      dispatch(fetchStockDetailsAsync(chartdatadaily,"daily",ticker));
      dispatch(fetchStockDetailsAsync(chartdatamonthly,"monthly",ticker));
      dispatch(fetchStockDetailsAsync(chartdataweekly,"weekly",ticker));
}
export {FetchStockdata}