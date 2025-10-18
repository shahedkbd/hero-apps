import React from 'react';
import AppError from '../../assets/App-Error.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center py-10'>
            <img src={AppError} alt="" />
        </div>
    );
};

export default ErrorPage;