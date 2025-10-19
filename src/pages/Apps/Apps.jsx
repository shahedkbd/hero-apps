import React, { useEffect, useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { useLoaderData, useNavigate } from 'react-router';

const Apps = () => {
    const AppsFakeData = useLoaderData(); // Loader থেকে সব ডাটা
    const [filteredApps, setFilteredApps] = useState(AppsFakeData);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const delayDebounce = setTimeout(() => {
            if (searchTerm.trim() === '') {
                setFilteredApps(AppsFakeData);
            } else {
                const filtered = AppsFakeData.filter(app =>
                    app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredApps(filtered);
            }
            setLoading(false);
        }, 500); 

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, AppsFakeData]);


    const navigate = useNavigate()
    return (
        <div className='bg-gray-100 min-h-screen pb-10'>
            {/* Header Section */}
            <div className='text-center space-y-5 pt-10'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions.</p>
            </div>

            {/* Search Section */}
            <div className='flex justify-between items-center mx-10 md:mx-30 pt-10'>
                <h3 className='text-xl font-bold'>
                    ({filteredApps.length}) Apps Found
                </h3>

                <label className='input flex items-center gap-2 bg-white border rounded-md px-3 py-2 shadow-sm'>
                    <svg
                        className='h-5 w-5 text-gray-500'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <circle cx='11' cy='11' r='8'></circle>
                        <path d='m21 21-4.3-4.3'></path>
                    </svg>
                    <input
                        type='search'
                        placeholder='Search apps...'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className='outline-none bg-transparent w-full'
                    />
                </label>
            </div>

            {/* Loading or Results Section */}
            <div className='mx-10 md:mx-20'>
                {loading ? (
                    <div className='text-center text-lg font-semibold text-gray-500 py-10 animate-pulse'>
                        Searching...
                    </div>
                ) : filteredApps.length === 0 ? (
                    <div className='text-center text-5xl font-bold text-gray-500 py-10'>
                        No Apps Found
                        <div className='mt-6 '>
                            <button onClick={()=> navigate("/apps")} className='btn bg-linear-to-t from-[#632EE3] to-[#9F62F2] text-white'>Show All Apps</button>
                        </div>
                    </div>
                ) : (
                    <div className='pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-10'>
                        {filteredApps.map(app => (
                            <SingleApp key={app.id} SingleAppData={app} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;
