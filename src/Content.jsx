import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const Content = () => {

  const navigate = useNavigate();

  const handleGetResume = () => {
    const user = auth.currentUser;
    if (user) {
      navigate('/form'); // go to the form
    } else {
      alert("Please log in to access the resume form.");
    }
  };

  return (
    <>
    <Navbar />
    <div className='bg-gray-100 pt-[25vh] h-[80vh]'>
      <h1 className='text-4xl text-purple-700 pl-10'>Create Your Resume with one Click</h1>
      <div className='flex justify-center  pt-[6vh]'>
         
          <button className='text-3xl text-purple-900 bg-purple-200 rounded p-4 hover:bg-purple-300 shadow' onClick={handleGetResume}>
            Start My Resume
          </button>
        
      </div>
      </div>
    </>
  )
}

export default Content