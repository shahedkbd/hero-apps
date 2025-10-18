import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadsIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import reviewIcon from "../../assets/icon-review.png"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';




const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);
    const { title, image, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;
    return (
        <div className='bg-gray-100'>
            <div className='flex gap-30 mx-30 pt-20'>
                <img className='h-[300px]' src={image} alt="" />
                <div className='flex flex-col justify-center'>
                    <div className='space-y-3'>
                        <h2 className='text-3xl font-bold'>{title}</h2>
                        <p>Developed by: {companyName}</p>
                    </div>
                    <div className="divider"></div>
                    <div className='flex gap-15'>
                        <div className='space-y-2'>
                            <img src={downloadsIcon} className='h-[30px]' alt="" />
                            <p>Downloads</p>
                            <h2 className='text-5xl font-bold'>{downloads}</h2>
                        </div>
                        <div className='space-y-2'>
                            <img src={ratingIcon} className='h-[30px]' alt="" />
                            <p>Average Ratings</p>
                            <h2 className='text-5xl font-bold'>{ratingAvg}</h2>
                        </div>
                        <div className='space-y-2'>
                            <img src={reviewIcon} className='h-[30px]' alt="" />
                            <p>Total Reviews</p>
                            <h2 className='text-5xl font-bold'>{reviews}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider mx-30"></div>
            <div className='mx-30 flex justify-center'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ratings} layout="vertical" margin={{top: 20, right: 0, bottom: 20, left: 0}}>
                        <XAxis type="number" stroke="#808080"  />
                        <YAxis type="category" dataKey="name" stroke="#808080" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FF8811" barSize={25} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="divider mx-30"></div>
            <div className='mx-30 space-y-3 pb-10'>
                <h2 className='text-xl font-bold'>Description</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;