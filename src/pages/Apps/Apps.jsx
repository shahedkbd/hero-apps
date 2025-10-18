import React from 'react';
import App from '../../App';
import SingleApp from '../SingleApp/SingleApp';

const Apps = ({AppsFakeData}) => {
    
    return (
        <div className='pt-10 border-2 border-red-600 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
                AppsFakeData.map(SingleAppData => <SingleApp key={SingleAppData.id} SingleAppData={SingleAppData}></SingleApp>)
            }
        </div>
    );
};

export default Apps;