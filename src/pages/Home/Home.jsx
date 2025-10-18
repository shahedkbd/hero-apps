import React from 'react';
import AppStore from '../../assets/App Store.png'
import GooglePlay from '../../assets/google play.png'
import herobanner from '../../assets/hero.png'
import {useLoaderData, useNavigate } from 'react-router';
import Apps from '../Apps/Apps';
import SingleApp from '../SingleApp/SingleApp';



const Home = () => {
    const AppsFakeData = useLoaderData()
    const limitedData = AppsFakeData.slice(0, 8)
    const navigate = useNavigate()


    return (
        <div>
            <div className='bg-gray-100 text-center'>
                <h1 className='text-6xl font-bold pt-[50px]'>We Build<br></br><span className='bg-linear-to-t from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text'>Productive</span> Apps</h1>
                <p className='pt-[20px]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='pt-[20px]'>
                    <button  className='btn mr-3'><img src={GooglePlay} className='h-[20px]' alt="" />Google Play</button>
                    <button className='btn'><img src={AppStore} className='h-[20px]' alt="" />App Store</button>
                </div>
                <div className='flex justify-center pt-[20px]'>
                    <img src={herobanner} className='h-96' alt="" />
                </div>
                <div className='min-h-[200px] bg-linear-to-t from-[#632EE3] to-[#9F62F2] text-white'>
                    <h2 className='text-4xl font-bold pt-10'>Trusted by Millions, Built for You</h2>
                    <div className='pt-6 pb-10 flex gap-30 justify-center'>
                        <div className='space-y-2'>
                            <p>Total Downloads</p>
                            <h3 className='text-5xl font-bold'>29.6M</h3>
                            <p>21% more than last month</p>
                        </div>
                        <div className='space-y-2'>
                            <p>Total Reviews</p>
                            <h3 className='text-5xl font-bold'>906K</h3>
                            <p>46% more than last month</p>
                        </div>
                        <div className='space-y-2'>
                            <p>Active Apps</p>
                            <h3 className='text-5xl font-bold'>132+</h3>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 text-center'>
                {/* Trending Apps */}
                <h2 className='text-4xl font-bold pt-10'>Trending Apps</h2>
                <p className='pt-6 text-xl'>Explore All Trending Apps on the Market developed by us</p>
                <div className='pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-50'>
                    {
                        limitedData.map(appItem => <SingleApp key={appItem.id} appItem={appItem}></SingleApp>)
                    }
                </div>
                <div className='py-6'>
                    <button onClick={()=> navigate("/apps")} className='btn bg-linear-to-t from-[#632EE3] to-[#9F62F2] text-white'>Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Home;