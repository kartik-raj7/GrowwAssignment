import React from "react";
import { useDispatch } from "react-redux";
import { apiRouter } from "@/services/apiRouter";
import { fetchImageDetailsASync, fetchStockDetailsAsync } from "@/redux/api/stockdetails";


const FetchStockdata=(ticker)=>{
    const dispatch = useDispatch();
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
export {FetchStockdata}