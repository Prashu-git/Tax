import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or API call here

    // Assuming form submission is successful
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-blue-800 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              {isSubmitted ? (
                <p className="text-gray-300">
                  Thank you for your message. We will get back to you soon!
                </p>
              ) : (
                <>
                  <h1 className="text-3xl">Contact Us!</h1>
                  <p className="text-gray-300">Fill up the form below to send us a message.</p>
                </>
              )}
            </div>
            {isSubmitted ? null : (
              <form onSubmit={handleSubmit}>
                {/* Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Name" name="name" required
                />
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email" placeholder="Email" name="email" required
                />
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Subject" name="_subject" required
                />
                <textarea
                  className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Type your message here..." name="message" required style={{ height: '121px' }}
                />
                <div className="flex items-center justify-between">
                  <button
                    className="bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send ➤
                  </button>
                  <button
                    className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="reset"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
