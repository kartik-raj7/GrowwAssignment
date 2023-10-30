import React from 'react'

const CapDetermine = (data) => {
   if(data>100000000000){
    return "Large Cap";
   }
   else if(data<10000000000&&data>10000000){
    return "Mid Cap";
   }
   else return "Small Cap"
}

export default CapDetermine