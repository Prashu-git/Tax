import React, { useState } from 'react';

const customerReviews = [
  {
    name: 'one',
    imageSrc: 'https://www.imgonline.com.ua/examples/red-yellow-flower.jpg',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.',
  },
  {
    name: 'two',
    imageSrc: 'https://bizimages.withfloats.com/actual/60e0629d1eb0770001a38755.jpg',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.',
  },
  {
    name: 'three',
    imageSrc: 'https://onlinejpgtools.com/images/examples-onlinejpgtools/orange-flower.jpg',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, quam ac fermentum vulputate, augue.',
  },
  // Add more reviews with image details
];

const ReviewCard = ({ review, active }) => {
  return (
    <div
      className={`testimonial p-5 mx-4 max-w-md transition-transform ${
        active ? 'block' : 'hidden'
      }`}
    >
      <img
        alt={review.name}
        src={review.imageSrc}
        className="customer-image rounded-full mx-auto max-w-[100px] max-h-[100px]"
      />
      <p className="customer-review mt-4 text-gray-600 text-center">{review.review}</p>
      <p className="customer-name mt-4 text-xl font-semibold text-center">{review.name}</p>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === customerReviews.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? customerReviews.length - 1 : prevIndex - 1));
  };

  return (
    <section className="slider bg-gray-100 py-10 text-center relative">
      <button
        onClick={handlePrevSlide}
        className="slider-button prev-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-2 rounded-full focus:outline-none absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="logo-slider flex justify-center items-center overflow-hidden">
        {customerReviews.map((review, index) => (
          <ReviewCard key={index} review={review} active={index === activeIndex} />
        ))}
      </div>
      <button
        onClick={handleNextSlide}
        className="slider-button next-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-2 rounded-full focus:outline-none absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default Testimonials;
