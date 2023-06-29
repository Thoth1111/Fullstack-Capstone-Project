import clsx from 'clsx';
import { useState } from 'react';

export const Toast = ({ message, type }) => {
  const toastClasses = clsx('z-50 h-20 w-96 text-center flex items-center justify-center text-xl font-bold rounded-lg right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', {
    'text-red-600 border-red-400 border-2 bg-red-200': type === 'error' || type === 'Error',
    'text-green-600 border-green-400 border-2 bg-green-200': type === 'success' || type === 'Success',
  });

  return (
    <div className={toastClasses}>
      <p>{message}</p>
    </div>
  );
};

export const useToast = () => {
  const [displayBool, setDisplayBool] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const showToast = (newMessage, newType) => {
    setDisplayBool(true);
    setMessage(newMessage);
    setType(newType);

    setTimeout(() => {
      setDisplayBool(false);
    }, 2200);
  };

  return [displayBool, message, type, showToast];
};
