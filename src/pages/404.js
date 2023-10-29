import TopBar from '@/components/TopBar/topBar';
import Link from 'next/link';
import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const ErrorPage = () => {
  return (
    <div>
    <TopBar error={true}/>
    <div className="flex justify-center align-center flex-column" style={{ height: '100vh' }}>
      <FiAlertTriangle className='erroricon' />
      <h1 className='errortext mt-1'>Oops! Something went wrong.</h1>
      <p className='errortext mt-1'>We apologize for the inconvenience. Please try again later.</p>
      <Link href='/homepage' className='errortext mt-1'>Take me Home</Link>
    </div>
    </div>
  );
};

export default ErrorPage;
