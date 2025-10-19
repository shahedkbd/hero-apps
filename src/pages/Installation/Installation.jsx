import React from 'react';
import { useEffect, useState } from 'react';
import downloadsIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import { toast } from 'react-toastify';



const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(stored);
    }, []);

    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    };

    const handleSort = (option) => {
        setSortOption(option);
        let sortedApps = [...installedApps];

        if (option === 'downloads') {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (option === 'rating') {
            sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
        } else if (option === 'size') {
            sortedApps.sort((a, b) => a.size - b.size);
        }

        setInstalledApps(sortedApps);
    };

    return (
        <div>
            <div className='text-center space-y-2 py-10 bg-gray-100'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='bg-gray-100'>
                <div className="p-6 max-sm:p-1">
                    <div className=' flex justify-between'>
                        <div>
                            <h1 className="text-3xl font-bold mb-4">
                                ({installedApps.length}) Apps Found
                            </h1>
                        </div>
                        <div>
                            <select
                                value={sortOption}
                                onChange={(e) => handleSort(e.target.value)}
                                className="border rounded-lg p-2 text-sm"
                            >
                                <option value="">Sort By</option>
                                <option value="downloads">Downloads (High → Low)</option>
                                <option value="rating">Rating (High → Low)</option>
                                <option value="size">Size (Low → High)</option>
                            </select>
                        </div>
                    </div>

                    {installedApps.length === 0 ? (
                        <p className="text-gray-600 text-center text-4xl mt-4">No apps installed yet.</p>
                    ) : (
                        <div className="space-y-3">
                            {installedApps.map(app => (
                                <div key={app.id} className="p-1 rounded-lg shadow flex justify-between gap-5 max-sm:gap-1  bg-white">
                                    <div className='lg:w-[5%]'>
                                        <img src={app.image} alt={app.title} className="w-full p-1 h-20 object-cover rounded-md" />
                                    </div>

                                    <div className='flex justify-between items-center w-[95%]'>
                                        <div className='space-y-2'>
                                            <div><h2 className="text-xl font-semibold">{app.title}</h2></div>
                                            <div className='flex max-sm:gap-1 gap-4'>
                                                <div className='flex gap-2'>
                                                    <img src={downloadsIcon} className='h-[20px]' alt="" />
                                                    <p className="text-sm mb-1">{app.downloads}</p>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <img src={ratingIcon} className='h-[20px]' alt="" />
                                                    <p className="text-sm mb-1">{app.ratingAvg}</p>
                                                </div>
                                                <p className="text-sm mb-1 font-bold text-gray-600">{app.size} MB</p>
                                            </div>
                                        </div>
                                        <div className='pr-2'>
                                            <button
                                                onClick={() => {
                                                    handleUninstall(app.id);
                                                    toast(`${app.title} uninstall from your device`)
                                                }}
                                                className="btn w-full bg-[#00D390] text-white font-medium py-2 rounded-lg transition-all duration-300"
                                            >
                                                Uninstall
                                            </button>
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Installation;