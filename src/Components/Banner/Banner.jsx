import React from 'react';
import bannarImg from '../../images/main-camera.png'
const Banner = () => {
    return (
        <div className='grid min-h-[92vh] md:grid-cols-2 grid-cols-1 content-center items-center justify-items-center gap-6 w-3/4 mx-auto'>
            <div className='text-left m-auto p-2'>
                <h1 className='lg:text-6xl md:text-4xl text-3xl font-bold'>Your Next Camera</h1>
                <h1 className='lg:text-6xl md:text-4xl text-3xl font-bold text-teal-800'>Your best Dream</h1>
                <p className='my-2'>Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc</p>
                <button className='bg-slate-200 text-xl px-3 py-2 font-semibold my-3'>Live demo</button>
            </div>
            <div className='bg-slate-300 rounded-full p-10'>
                <img src={bannarImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;