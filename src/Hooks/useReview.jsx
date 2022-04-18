import axios from "axios";
import { useEffect, useState } from "react"

const useReview = () => {
    const [review,setReview] = useState([]);
    useEffect(() => {
        axios.get('review-person.json')
        .then(data => setReview(data.data))
    },[])
    return [review,setReview];
}

export default useReview