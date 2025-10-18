import React from 'react';
import { useEffect, useState } from 'react';
import downloadsIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"


const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(stored);
    }, []);

    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    };

    return (
        <div>
            <div className='text-center space-y-2 py-10 bg-gray-100'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='bg-gray-100'>
                <div className='flex justify-between'>
                    <h3>({installedApps.length}) Apps Found</h3>
                    <select defaultValue="Pick a color" className="select">
                        <option disabled={true}>Pick a color</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>
                </div>
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">
                        Installed Apps ({installedApps.length})
                    </h1>

                    {installedApps.length === 0 ? (
                        <p className="text-gray-600">No apps installed yet.</p>
                    ) : (
                        <div className="space-y-3">
                            {installedApps.map(app => (
                                <div key={app.id} className="p-1 rounded-lg shadow flex justify-between gap-5 bg-white">
                                    <div className='w-[5%]'>
                                        <img src={app.image} alt={app.title} className="w-full p-1 h-20 object-cover rounded-md" />
                                    </div>

                                    <div className='flex justify-between items-center w-[95%]'>
                                        <div className='space-y-2'>
                                            <div><h2 className="text-xl font-semibold">{app.title}</h2></div>
                                            <div className='flex gap-4'>
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
                                                onClick={() => handleUninstall(app.id)}
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