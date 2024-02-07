import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import './loading.css'

const Loading = ({loading}) => {
  return (
    <>
   
    <div className={loading ? 'loading__container' : 'loading__none'}>
      <CircleLoader
        color={"#FFDB48"} loading={loading} size={100}
        
/>
    </div>
    </>
    
    
    
  )
}

export default Loading
