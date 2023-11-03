import React from 'react';

const Card = ({ star, title, imgSrc }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        {star} {/* Replace with your star icon */}
        {star} {/* Add additional stars as needed */}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
        Get working experience to work with this amazing team & in the future want to work together for bright future projects and also make a deposit to a freelancer.
      </p>
      <div className="flex items-center gap-4 mt-5">
        <img src={imgSrc} alt="testimonials" width={50} height={50} />
        {/* <div>
          <h3 className="font-semibold">One</h3>
          <a
            href="https://github.com/"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            @three
          </a>
        </div> */}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5" id="testimonial">
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Client Satisfaction</h2>
      </div>
      <div>
        <Card
          star="☆" /* Replace with your star icon or character */
          title="Modern look & trending design"
          imgSrc="/testimonials/1.png" /* Replace with the path to your image */
        />
      </div>
      <div>
        <Card
          star="☆"
          title="Layout and organized layers"
          imgSrc="/testimonials/2.png"
        />
      </div>
      <div>
        <Card
          star="☆"
          title="Design Quality & performance"
          imgSrc="/testimonials/3.png"
        />
      </div>
      <div>
        <Card
          star="☆"
          title="Layout and organized layers"
          imgSrc="/testimonials/4.png"
        />
      </div>
    </section>
  );
};

export default Testimonials;
