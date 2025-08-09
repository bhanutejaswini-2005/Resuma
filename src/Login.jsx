import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormNav from './FormNav'
import {auth} from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth'; /* I am Using this for the SignUP purpose and not for login purpose, it has another one */
import { signInWithEmailAndPassword } from 'firebase/auth'; /* This is for login purpose . signin means login */

 
const Login = () => {

  const navigate = useNavigate();


  const handleSignUp= async(e) =>{
     e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth,signupEmail,signupPassword); 
      navigate('/');
    }catch(error){
      console.error(error.message);
    }
  };

  const handleLogin = async(e)=>{
     e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      navigate('/');
    }catch(error){
      console.error(error.message);
    }
  };

  const handleGoogleSignIn=async()=>{
    try{
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth , provider);
       navigate('/form'); 
    }catch(error){
      console.error(error.message);
    }
  };

  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");

  const [signupEmail,setSignupEmail] = useState("");
  const [signupPassword,setSignupPassword] = useState("");

  return (
    <>
      <FormNav />
     
      <div className="flex justify-center items-center pt-20 pb-24 bg-gray-50 min-h-screen">
        <div className="border-4 border-purple-700 rounded-xl shadow-lg h-[60vh] w-[90vw] max-w-5xl flex overflow-hidden">
    
          <div className="w-1/2 bg-white flex flex-col justify-center items-center px-8 gap-4 border-r-2 border-purple-300">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Login</h2>
             <form>
            <input
              type="email"
              value={loginEmail}
              onChange={(e)=>setLoginEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="password"
              value={loginPassword}
              onChange={(e)=>setLoginPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 mt-3"
              required
            />
            <button
              className="bg-purple-500 text-white text-lg w-40 h-12 mt-4 rounded-md hover:bg-purple-600 transition duration-200 ml-30"
              onClick={handleLogin}
              type="submit"
            >
              Login
            </button> </form>
          </div>
  

          <div className="w-1/2  flex flex-col justify-center items-center px-8 gap-3">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Sign Up</h2>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              value={signupEmail}
              onChange={(e)=>setSignupEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              value={signupPassword}
              onChange={(e)=>setSignupPassword(e.target.value)}
              placeholder="Set a Password"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-purple-400 text-white text-lg w-40 h-12 mt-4 rounded-md hover:bg-purple-200 transition duration-200" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className='bg-purple-500 text-white text-lg w-60 h-12 rounded-md hover:bg-purple-400' onClick={handleGoogleSignIn}>
              SignUp With Google
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
