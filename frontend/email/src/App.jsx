import React, { useState, useEffect } from 'react';
import mailboxIcon from './photos/shared-mailbox.978x1024.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import backgroundImage from './photos/img3.jpg';



export default function App() {
  const [emailText, setEmailText] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = async () => {
    try {
      const response = await fetch('https://email-api-zbes.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: emailText }),
      });
      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <img src={mailboxIcon} alt="Mailbox Icon" className="h-8 w-8" />
                  <span className="font-extrabold font-serif px-4">Spam Analysis</span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/home" className="text-black text-lg font-bold  hover:text-indigo-500">Home</a>
              <a href='/about' className='text-black text-lg font-bold hover:text-indigo-500'>About</a>
            </div>
          </div>
        </div>
      </nav>

      
      <div
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'right center', 
          backgroundRepeat: 'no-repeat',
        }}
      >
 
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-60"
          style={{
            filter: 'blur(10px)' ,
          }}
        ></div>
        <div className="text-center relative z-10">
          <h1 className="text-7xl shadow-inherit font-serif font-extrabold text-white mb-4" data-aos="fade-down">
            Spam Mail Analyzer
          </h1>
          <p className="text-md text-white mb-8" data-aos="fade-up">
            Ensure the validity of an email address with our Free Spam Mail Analyzer Tool
          </p>

          <p className="text-sm text-white mb-12 max-w-2xl mx-auto" data-aos="fade-up">
            Our Spam Email Analyzer helps identify and filter out unwanted spam, enhancing your email security and ensuring important messages are delivered to your inbox. Quickly and accurately detect spam to keep your communication efficient and protected.
          </p>

          <div className="flex justify-center" data-aos="zoom-in">
            <textarea
              placeholder="Enter your mail"
              className="w-full max-w-2xl px-6 py-6 rounded-md border text-gray-800 resize"
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
            />
          </div>
          
          <button
            onClick={handleCheck}
            className="bg-green-600 hover:bg-red-700 mt-5 text-white font-bold py-3 px-6 rounded-3xl"
            data-aos="fade-up"
          >
            Check
          </button>
         

          {result && (
            <div className="mt-4 text-3xl font-bold text-white" data-aos="fade-up">
              Result: {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
