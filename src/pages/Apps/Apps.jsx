import React from 'react';
import App from '../../App';
import SingleApp from '../SingleApp/SingleApp';
import { useLoaderData } from 'react-router';

const Apps = () => {
    const AppsFakeData = useLoaderData()

    return (
        <div className='bg-gray-100'>
            <div className='text-center space-y-5 pt-15'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mx-50 pt-5'>
                <h3 className='text-xl font-bold'>({AppsFakeData.length}) Apps Found</h3>
                <div>
                    <label className="input bg-gray-100">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="search Apps" />
                    </label>
                </div>
            </div>
            <div className='pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-50'>
                {
                    AppsFakeData.map(SingleAppData => <SingleApp key={SingleAppData.id} SingleAppData={SingleAppData}></SingleApp>)
                }
            </div>
        </div>
    );
};

export default Apps;