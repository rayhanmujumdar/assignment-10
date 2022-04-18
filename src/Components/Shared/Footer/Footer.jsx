import React from 'react';
import { Link } from 'react-router-dom';
import footer1 from '../../../image/footer/footer1.jpg'
import footer2 from '../../../image/footer/footer2.jpg'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div data-aos="fade-up"
        data-aos-delay="20" 
        data-aos-duration="500" 
        data-aos-easing="ease-in-out" >
            <div className='grid lg:grid-cols-4 md:grid-cols-3 pt-20 text-left md:gap-12 gap-6 px-5 bg-[#242422] text-white md:justify-items-center'>
                <div>
                    <p className='text-[#C2D544] font-extrabold text-3xl'>MUSCLES MARCO <small className='uppercase text-xs'>personal Trainer</small></p>
                    <p className='my-2 text-gray-400'>Being fit and living healthy is what I know and love. I believe in training with intensity, eating to fuel your body and having fun while doing it. If you're not enjoying fitness...what's the point?!</p>
                </div>
                <div>
                    <h1 className='text-3xl mb-3'>Quick Links</h1>
                    <div>
                        <ul className='text-gray-400'>
                            <li><Link to='/home' className='hover:underline hover:text-blue-500 my-2 text-xl'>Home</Link></li>
                            <li ><Link to='/services' className='hover:underline hover:text-blue-500 my-2 text-xl'>Services</Link></li>
                            <li ><Link to='/blog' className='hover:underline hover:text-blue-500 my-2 text-xl'>Blog</Link></li>
                            <li ><Link to='/about' className='hover:underline hover:text-blue-500 my-2 text-xl'>About</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl mb-3'>Latest News</h1>
                    <div className='flex items-center gap-x-4 mb-4'>
                        <img src={footer1} alt="" className='w-14'/>
                        <div className='text-sm'>
                            <h3>Running Shoes: A Buyer’s Guide</h3>
                            <p className='text-gray-600'>0 COMMENTS</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <img src={footer2} alt="" className='w-14'/>
                        <div className='text-sm'>
                            <h3>The Benefits of a Personal Trainer</h3>
                            <p className='text-gray-600'>0 COMMENTS</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl mb-3'>My Contacts</h1>
                    <div className='text-gray-400'>
                        <h4 className='text-xl'>Phone: <span className='font-thin text-lg mx-2'>01776464695</span></h4>
                        <h4 className='text-sm'>E-mail: <span className='font-thin text-sm mx-2 text-ellipsis'>rayhanmujumdar0177@gmail.com</span></h4>
                        <h4 className='text-sm'>Address: <span className='font-thin text-sm mx-2'>Hajigonj,Chandpur</span></h4>
                    </div>
                </div>
            </div>
            <div className='border-b-2 border-gray-600 pt-20 bg-[#242422]'>

            </div>
            <div className='py-8 bg-[#242422] flex justify-between items-center md:flex-row flex-col px-6 text-white rounded-bl-md rounded-br-md'>
                <p>MUSCLES MARCO © <span className='mx-1'>{year}</span> All Rights Reserved.</p>
                <div className='flex gap-x-2 md:mt-0 mt-3 text-center'>
                        <a href='#' className='bg-[#181818] w-12 h-12 leading-[48px] cursor-pointer'><i class="fa-brands fa-twitter"></i></a>
                        <a href='#' className='bg-[#181818] w-12 h-12 leading-[48px] cursor-pointer'><i class="fa-brands fa-google"></i></a>
                        <a href='#' className='bg-[#181818] w-12 h-12 leading-[48px] cursor-pointer'><i class="fa-brands fa-facebook"></i></a>
                        <a  href='#'  className='bg-[#181818] w-12 h-12 leading-[48px] cursor-pointer'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;