import React from 'react';
import AppError from '../../assets/App-Error.png'
import { Navigate, useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center py-10 space-y-5'>
            <img src={AppError} className='h-56 w-56' alt="" />
            <h2 className='text-4xl font-bold'>OPPS!! APP NOT FOUND</h2>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={()=> navigate("/")} className='btn text-white bg-linear-to-t from-[#632EE3] to-[#9F62F2]'>Go Back!</button>
        </div>
    );
};

export default ErrorPage;