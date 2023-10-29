import createUrlWithQuery from '@/utils/CreateURLwithQuery';
import axios from 'axios';
export const axiosGet = async (data,type) => {
  try {
  let apiUrl
  if(type=='imagedetails'){
    apiUrl = createUrlWithQuery(process.env.NEXT_FINANCIAL_BASE_URL, {...data,  apikey:process.env.NEXT_FINANCIAL_API_KEY});
  }
  else{
  apiUrl = createUrlWithQuery(process.env.NEXT_BASE_URL, {...data,  apikey:process.env.NEXT_API_KEY});
  }
  const response = await axios.get(apiUrl);
    
    return {
      status: response?.data?.status || response?.data?.[0]?.status,
      message: response?.data?.message || response?.data?.[0]?.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error?.response?.data?.message || error?.message || 'Something went wrong',
      data: error.response?.data || error,
    };
  }
};
