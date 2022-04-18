import useReview from '../../Hooks/useReview'
import ShotReview from '../ShotReview/ShotReview';
const Reviews = () => {
    const [reviews,setReviews] = useReview([])
    return (
        <div>
            <h1 className='mx-auto text-4xl font-mono my-3 text-green-800 pb-2'>Customer Review</h1>
            {
                reviews.map(review => 
                <ShotReview 
                key={review.id}
                review={review}
                ></ShotReview>)
            }
        </div>
    );
};

export default Reviews;