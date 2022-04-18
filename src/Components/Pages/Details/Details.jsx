import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTips from '../../../Hooks/useTips';
import Header from '../../Shared/Header/Header';
import Loading from '../../Shared/Loading/Loading';

const Details = () => {
    const  {detailsId} = useParams();
    const [services,setServices,loading] = useTips()
    const [detail,setDetail] = useState({})
    useEffect(() => {
    },[detailsId])
    useEffect(() => {
        const findDetails = services.find(service => service.id === detailsId)
        setDetail(findDetails)
    },[services,detailsId,detail])
    console.log(detail?.picture)
    return (
        <div>
            <Header></Header>
            {
                loading && <Loading></Loading>
            }
            <div className='grid lg:grid-cols-2 grid-col-1 py-10 container mx-auto'>
                <div data-aos="fade-right">
                    <img src={detail?.picture} alt="" className=' lg:max-w-[500px] md:max-w-sm sm:max-w-xl md:mx-auto mx-3'/>
                </div>
                <div data-aos="fade-left" className='flex flex-col justify-center items-center px-10 py-4 text-center lg:text-left'>
                    <h1 className='text-3xl my-2 md:3/4 w-full pb-2 border-b border-b-stone-500'>{detail?.name} Details</h1>
                    <p>{detail?.details}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;