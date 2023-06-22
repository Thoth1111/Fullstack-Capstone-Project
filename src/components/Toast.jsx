import clsx from 'clsx';
import { useEffect, useState } from 'react';

const Toast = ( {message, type })  => {
	
  const [showToast, setShowToast] = useState(true);
 
	// useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowToast(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {showToast && (
      // <div className={` ${type} h-20 w-20 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}>

      <div className={clsx('z-50 h-20 w-96 text-center flex items-center justify-center text-xl font-bold rounded-lg right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ', {
        ' text-red-600 border-red-400 border-2 bg-red-200': type === 'error',
        ' text-green-600 border-green-400 border-2  bg-green-200': type === 'success',
      })}
      >

        <p>{message}</p>
      </div>
      )}
    </>
  );
}


export default Toast;