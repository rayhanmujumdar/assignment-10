import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const ShotReview = ({review}) => {
    const {name,picture,comment,rating} = review
    const star = []
    for(let i = 0;i < rating; i++){
        star.push(<StarIcon className='text-yellow-600 w-6'></StarIcon>)
    }
    return (
        <div className='my-4 w-96 mx-auto border-b-2 border-red-200 py-3'>
            <div className='flex justify-center items-center flex-col'>
                <img src={picture} alt="" className='w-20 h-20 rounded-full'/>
                <p className=''><span className='font-bold'>Name:</span> {name}</p>
            </div>
            <p className='my-2'>{comment}</p>
            <p className='flex justify-center'>{star}</p>
        </div>
    );
};

export default ShotReview;