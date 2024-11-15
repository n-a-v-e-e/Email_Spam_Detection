import React, { useEffect } from 'react';
import wallpaper from "./photos/img5.jpg";
import instagramIcon from "./photos/instagram.png";
import facebookIcon from "./photos/facebook.png";
import phoneIcon from "./photos/phone.png";
import emailIcon from "./photos/gmail.png";
import videoWallpaper from "./photos/video.mp4"; 
import 'aos/dist/aos.css';
import Aos from 'aos';




export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  return (
    <div>
    

      <div
        className="relative w-screen h-screen  bg-cover bg-center flex items-center bg-gradient-to-r">
        <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoWallpaper}
        autoPlay
        loop
        muted
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <div className="absolute top-5 right-5">
        <a 
          href="/home" 
          className="text-white text-lg font-bold  px-4 py-2 rounded-lg hover:text-indigo-200 shadow-lg shadow-black"
        >
          Home
        </a>
      </div>
        <div className="relative text-left ml-20 font-serif text-white p-8">
         <h1 className="text-6xl font-bold mb-7" data-aos="fade-up">
            ABOUT
          </h1>
          <p className="text-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            We specialize in email spam detection to keep your inbox safe and organized. Our smart algorithms filter out unwanted emails and protect you from scams. We’re committed to providing easy-to-use solutions for everyone. With continuous improvements, we stay ahead of spammers. Join us in making email communication secure and efficient!
          </p>
        </div>
      </div>

      <div className="w-screen h-screen bg-black">
        <div className="flex items-center justify-center font-serif p-9">
          <h2 className="text-5xl text-white font-bold mb-10" data-aos="fade-down">
            Description
          </h2>
        </div>

        <div className="text-white text-lg leading-relaxed p-8 mx-20">
          <h3 className="text-3xl text-center font-bold mb-6" data-aos="zoom-in">
            Introduction
          </h3>
          <p className="mb-10 p-5" data-aos="fade-left">
            This web page implements an **Email Spam Detection** system that automatically classifies incoming emails into **spam** or **ham** (non-spam) categories. The model is trained using a **Logistic Regression** classifier and **TF-IDF Vectorizer** for feature extraction.
          </p>

          <h3 className="text-3xl text-center font-bold pt-9 mb-6" data-aos="zoom-in">
            Technologies Used
          </h3>
          <p className="mb-12" data-aos="fade-right">
            The spam detection system leverages two key technologies to analyze email content:
          </p>
          <ul className="list-inside list-disc mb-6" data-aos="fade-up">
            <li>
              <strong>Logistic Regression</strong>: A statistical method for binary classification that predicts whether an email is spam or not based on the extracted features.
            </li>
            <li>
              <strong>TF-IDF Vectorizer</strong>: This technique transforms the email text into a numerical representation based on term frequency (TF) and inverse document frequency (IDF), helping the model understand the importance of each word in the email content.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-screen h-screen bg-black">
        <div className="text-white text-lg leading-relaxed p-8 mx-20">
          <h3 className="text-3xl font-bold text-center p-5 mb-6" data-aos="zoom-in">
            Model Explanation
          </h3>
          <p className="mb-6" data-aos="fade-up">
            The **Logistic Regression** algorithm is used for classification in this model. It is well-suited for binary classification tasks such as this one, where the objective is to classify emails into two categories: spam (1) or ham (0).
          </p>
          <p className="mb-6" data-aos="fade-up" data-aos-delay="200">
            The **TF-IDF Vectorizer** is applied to convert the text into numerical features. It works by evaluating how frequently a word appears in a given email and how rare the word is across the entire dataset. This helps the model focus on words that are more likely to identify spam or ham emails.
          </p>

          <h3 className="text-3xl text-center p-5 font-bold mb-6" data-aos="zoom-in">
            Sample Dataset
          </h3>
          <p className="mb-6" data-aos="fade-left">
            Below is a sample of the dataset used for training the model. The dataset consists of emails with labeled content:
          </p>

          <div className="bg-gray-800 p-4 rounded-lg shadow-white shadow-sm" data-aos="fade-up">
            <h4 className="text-xl font-bold text-white mb-4">Sample Data</h4>
            <div className="text-white">
              <p>
                <strong>Body:</strong> "Is your brother in need of a loan homeowners - do you have less than perfect credit?"
              </p>
              <p>
                <strong>Label:</strong> 1 (spam)
              </p>
              <p className="mt-4">
                <strong>Body:</strong> "This is a friendly reminder for the meeting scheduled tomorrow at 10 AM."
              </p>
              <p>
                <strong>Label:</strong> 0 (ham)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-black">
        <div className="text-white text-lg leading-relaxed p-8 mx-20">
          <p className="mt-6" data-aos="fade-right">
            The **Label** indicates whether an email is spam (1) or ham (0), which helps the model learn to differentiate between unwanted emails and legitimate ones.
          </p>
        </div>

        <div className="bg-gray-900 mx-24 mb-10 rounded-lg shadow-white shadow-sm" data-aos="fade-up">
          <div className="text-white text-2xl text-center leading-relaxed p-8 mx-20">
            <p className="mt-6">
              <b>Dataset Link:</b>
              <a
                href="https://www.kaggle.com/datasets/nitishabharathi/email-spam-dataset?select=enronSpamSubset.csv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.kaggle.com/datasets/nitishabharathi/email-spam-dataset?select=enronSpamSubset.csv
              </a>
            </p>
          </div>
        </div>


        <div className=" bg-gray-900 h-96 text-white text-center p-10 ">
          <h3 className="text-3xl font-bold mb-6" data-aos="fade-down">
            Contact
          </h3>
          <div className="text-lg space-y-4" data-aos="fade-up">
            <p className="flex items-center justify-center space-x-4">
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              <strong>Instagram:</strong>{" "}
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <u>https://www.instagram.com/reo.naveen?igsh=b2RlNG14NWxhZGl6</u>
              </a>
            </p>
            <p className="flex items-center justify-center space-x-4">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              <strong>Facebook:</strong>{" "}
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <u>https://www.facebook.com/reo.naveen</u>
              </a>
            </p>
            <p className="flex items-center justify-center space-x-4">
            <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
              <strong>Contact Number:</strong> +91 733 907 9127
            </p>
            <p className="flex items-center justify-center space-x-4">
            <img src={emailIcon} alt="Email" className="w-6 h-6" />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:yourname@email.com"
                className="text-blue-400 hover:underline"
              >
                <u>naveenkumark2606@email.com</u>
              </a>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}


