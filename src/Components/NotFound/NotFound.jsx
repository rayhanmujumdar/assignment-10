import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col items-center justify-center h-[92vh]'>
                <p className='text-9xl text-gray-900'>404</p>
                <p className='font-semibold'>Ooops!!</p>
                <p className='uppercase mt-4'>that page doesn't exist or is unavailable</p>
                <button onClick={() => navigate('/')} className='bg-gray-900 text-white px-4 py-2 my-6 rounded-sm'>Go Back to Home</button>
            </div>
        </div>
    );
};

export default NotFound;