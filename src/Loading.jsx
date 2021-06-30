import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import './Animation.css'
import Animation from './Animation';


const Loading = () => {
  
  return (
    <div className='back'>
      <HashLoader color='ffffff' size={50} />
    </div>
      
    
  );
};

export default Loading;
