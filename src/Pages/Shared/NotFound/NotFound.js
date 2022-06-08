import React from 'react';
import notfound from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center'>OOPs...!!The Page Has Not Published Yet</h2>
            <img width='100%' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;