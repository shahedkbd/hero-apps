import React from 'react';

const SingleApp = ({SingleAppData}) => {
    console.log(SingleAppData);
    const {image, title, downloads, ratingAvg} = SingleAppData
    
    return (
        <div className='border-2 border-green-600 p-5'>
            <img src={image} className='justify-self-center object-cover border' alt="" />
            <h2 className='text-left'>{title}</h2>
            
        </div>
    );
};

export default SingleApp;