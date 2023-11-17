import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsApp from './WhatsApp';

const Contact = () => {
  const [formData, setFormData] = useState({
    contact_names: '',
    contact_email: '',
    contact_phone: '',
    contact_message: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data to your server or perform any other actions as needed
    // ...

    // Clear the form
    setFormData({
      contact_names: '',
      contact_email: '',
      contact_phone: '',
      contact_message: '',
    });

    // Show the popup
    setShowPopup(true);
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Header />
      <section className="bg-white py-4 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 md:mb-4">Contact Us</h3>
              <p className="text-green-500 text-sm mb-2 hidden contact_success_box">
                We received your message and you'll hear from us soon. Thank You!
              </p>
              <form id="contact-form" className="contact" onSubmit={handleSubmit}>
                <input
                  className="w-full h-12 p-2 mb-2 md:mb-4 border border-gray-300 rounded-md"
                  required
                  name="contact_names"
                  placeholder="Full Name*"
                  type="text"
                  value={formData.contact_names}
                  onChange={handleInputChange}
                />
                <input
                  className="w-full h-12 p-2 mb-2 md:mb-4 border border-gray-300 rounded-md"
                  required
                  name="contact_email"
                  placeholder="Email Address*"
                  type="email"
                  value={formData.contact_email}
                  onChange={handleInputChange}
                />
                <input
                  className="w-full h-12 p-2 mb-2 md:mb-4 border border-gray-300 rounded-md"
                  required
                  name="contact_phone"
                  placeholder="Phone Number*"
                  type="text"
                  value={formData.contact_phone}
                  onChange={handleInputChange}
                />
                <textarea
                  className="w-full p-2 mb-2 md:mb-4 border border-gray-300 rounded-md"
                  rows="2"
                  name="contact_message"
                  placeholder="Your Message..."
                  value={formData.contact_message}
                  onChange={handleInputChange}
                ></textarea>
                <input
                  value="Send Message"
                  id="submit-button"
                  className="w-full h-12 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
                  type="submit"
                />
              </form>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 md:mb-4">How to find us</h3>
              <iframe
                className="w-full h-60 mb-4 border border-gray-300 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d514.643387419351!2d77.55838266997189!3d12.98997620823814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b21782bf5%3A0xbd38d7283e543dd!2sPunjab%20National%20Bank!5e0!3m2!1sen!2sin!4v1693468001208!5m2!1sen!2sin"
                allowFullScreen
                title="Google Maps"
              ></iframe>
              <h5 className="text-xl font-semibold mb-2">Head Office</h5>
              <p className="text-gray-700 mb-2">
                <i className="bi bi-geo-alt-fill text-blue-600 text-xl align-middle"></i>
                <p>123 Dr. RajKumar Road, Bangalore, Karnataka 560021</p>
              </p>
              <p className="text-gray-700 mb-2">
                <i className="bi bi-envelope-open-fill text-blue-600 text-xl align-middle"></i>{' '}
                <a href="mailto:taxmarg@gmail.com" className="hover:underline">
                  taxmarg@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <i className="bi bi-telephone-fill text-blue-600 text-xl align-middle"></i> +91 999999999
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popup message */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg text-center">
            <p>Your message has been sent. We will contact you as soon as possible. Thank you!</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
      <WhatsApp />
    </>
  );
};

export default Contact;
