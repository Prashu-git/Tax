import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white p-4">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div>
                        <h2 className="text-xl font-bold mb-2 ">TaxMarg</h2>
                        <p> 123 Dr. RajKumar Road, Bangalore, Karnataka 560021</p>
                        <br/>
                        <p> email : taxmart@gmail.com</p>
                        <br/>

                        <p>Phone: +91 999999999</p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 underline">Important Links</h2>
                        <ul>
                            <li>
                                <a href="/" className="text-white hover:text-black block  lg:text-white p-1 px-3  ">About</a>
                            </li>
                            <li>
                                <a href="/about" className="text-white hover:text-black block  lg:text-white p-1 px-3  ">GST</a>
                            </li>
                            <li>
                                <a href="/services" className="text-white hover:text-black block  lg:text-white p-1 px-3  ">Services</a>
                            </li>

                            <li>
                                <a href="/businesses" className="text-white hover:text-black block  lg:text-white p-1 px-3  ">Income Tax Dept</a>
                            </li>                                               <li>
                                <a href="/contact" className="text-white hover:text-black block  lg:text-white p-1 px-3  ">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 underline" >Legal</h2>
                        <ul>
                            <li>
                                <a
                                    href="/termsCondition" className="text-white hover:text-black block  lg:text-white p-2 px-6  "
                                >Terms and Conditions</a>
                            </li>
                            <li>
                                <a
                                    href="/privacy-policy" className="text-white hover:text-black block  lg:text-white p-2 px-6  ">Privacy Policy</a>
                            </li>
                            <li>
                                <a
                                    href="/service-policy " className="text-white hover:text-black block  lg:text-white p-2 px-6  ">  Service Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                {/* <p className="mt-4">&copy; {new Date().getFullYear()} Company Name</p> */}
            </div>
            <hr className="my-8 border-white border-gray-700" />
            <div className="flex items-center justify-center space-x-4">
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Facebook */}
                    <svg
                        className="h-6 w-6 fill-current text-white hover:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 12.009c0-5.524-4.476-10-10-10s-10 4.476-10 10c0 4.937 3.61 9.007 8.317 9.816v-7.005h-2.497v-2.941h2.497v-2.198c0-2.467 1.464-3.827 3.721-3.827 1.071 0 1.988.079 2.254.114v2.588h-1.545c-1.212 0-1.449.576-1.449 1.423v1.862h2.896l-.379 2.941h-2.517v7.056c4.707-.809 8.308-4.879 8.308-9.816z" />
                    </svg>
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Instagram */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="#fff"
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                        ></path>
                    </svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    {/* Twitter */}
                    <svg
                        className="h-6 w-6 fill-current text-white hover:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23.954 4.569c-.885.388-1.835.65-2.833.771 1.014-.609 1.794-1.575 2.164-2.725-.951.564-2.005.974-3.127 1.194-.895-.957-2.17-1.555-3.578-1.555-2.706 0-4.904 2.198-4.904 4.904 0 .384.043.758.126 1.116-4.082-.205-7.7-2.164-10.122-5.138-.422.717-.665 1.552-.665 2.445 0 1.693.863 3.188 2.172 4.066-.8-.025-1.556-.245-2.217-.611v.062c0 2.364 1.681 4.33 3.913 4.78-.41.111-.84.172-1.283.172-.313 0-.616-.031-.917-.09.631 1.958 2.445 3.381 4.598 3.422-1.685 1.322-3.807 2.11-6.104 2.11-.397 0-.79-.023-1.178-.069 2.185 1.398 4.768 2.21 7.554 2.21 9.054 0 14.007-7.498 14.007-14.007 0-.213-.005-.426-.015-.638.959-.696 1.798-1.566 2.46-2.557l-.047-.02z" />
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
