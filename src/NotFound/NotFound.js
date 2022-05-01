import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    
    return (
      <div style={{minHeight: '90vh'}} className='flex justify-center items-center flex-col'>
        <div>
          <img src="https://i.ibb.co/7gGKbMY/notFund.png" alt="" />
        </div>
        <div>
          <h2 className='text-xl font-bold text-red-700'>THE PAGE YOU REQUESTED COULD NOT FOUND</h2>
          <button onClick={() => navigate('/')} className='bg-blue-800 text-xl font-semibold py-2 px-5 text-white rounded-sm mt-3'>BACK TO HOME</button>
        </div>
      </div>
    );
};

export default NotFound;