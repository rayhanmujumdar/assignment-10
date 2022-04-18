import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import ShotReview from '../ShotReview/ShotReview';
const HomeReview = () => {
    const [review,setReview] = useReview()
    const shotReview = review.slice(0,3)
    const nevigate = useNavigate()
    return (
        <div className='my-14 container mx-auto'>
            <h1 className='md:text-5xl font-mono text-3xl'>Customer Reviews</h1>
            <div className='my-10'>
                {
                    shotReview.map(review => 
                    <ShotReview 
                    key={review.id}
                    review={review}
                    ></ShotReview>)
                }
                
            </div>
            <button onClick={() => nevigate('/reviews')} className='bg-blue-900 text-white font-semibold px-10 py-1 rounded-md my-3'>see all reviews</button>
        </div>
    );
};

export default HomeReview;