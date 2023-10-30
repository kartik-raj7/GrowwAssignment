const isExpired = (expirationTime) => {
    const currentTime = new Date().getTime();
    const expirationTimeInMs = new Date(expirationTime).getTime();
    const timeDifferenceInMinutes = (currentTime - expirationTimeInMs) / (1000 * 60);
  
    return timeDifferenceInMinutes > 30;
  };
  
  export default isExpired;