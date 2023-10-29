const createUrlWithQuery = (baseUrl, data) => {
    
    if (!data || typeof data !== 'object') {
      throw new Error('Data must be an object');
    }
    const queryParams = Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
    if(data['image']){
      return `${baseUrl}/${data['ticker']}?apikey=${data['apikey']}`
    }
    return `${baseUrl}?${queryParams}`;
  };
  export default createUrlWithQuery