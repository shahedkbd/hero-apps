import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { Link } from 'react-router';


const SingleApp = ({ SingleAppData, appItem }) => {
    const { image, title, downloads, ratingAvg, id } = SingleAppData || appItem;
    const navigate = useNavigate()


    return (
        <Link to={`/bookDetails/${id}`}>
            <div className='p-5 bg-white rounded space-y-2'>
                <img src={image} className='justify-self-center object-cover rounded' alt="" />
                <h2 className='text-left text-xl font-bold'>{title}</h2>
                <div className='flex justify-between'>
                    <button className='bg-[#F1F5E8] text-[#00D390] btn pr-3 p-1 rounded'><MdOutlineFileDownload />{downloads}</button>
                    <button className='bg-[#FFF0E1] text-[#FF8811] btn pr-3 p-1 rounded'><FaStar />{ratingAvg}</button>
                </div>

            </div>
        </Link>
    );
};

export default SingleApp;