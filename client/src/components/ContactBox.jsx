import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const ContactBox = () => {
  return (
    <div className="w-full rounded-3xl shadow-minimal p-8 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 flex flex-col gap-5">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-heading font-bold text-heading mb-2">Get in Touch</h2>
        <p className="paragraph text-sm">We’d love to hear from you. Reach out to us using any method below.</p>
      </div>
      <div className="p-[.5px] bg-paragraph/20 w-full"></div>
      {/* Contact Info */}
      <div className="space-y-5 mt-5 text-secondary text-base">
        <div className="flex items-center gap-4">
          <span className="text-primary text-xl">
            <FiPhone />
          </span>
          <span className=' font-heading font-semibold'>+91 9876543332</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-primary text-xl">
            <FiMail />
          </span>
          <span className='font-heading font-semibold'>contact@syedammalnursing.edu.in</span>
        </div>
        <div className="flex gap-4">
          <span className="text-primary mt-1 text-xl">
            <FiMapPin />
          </span>
          <span className='font-heading font-semibold'>Ramnad, Tamil Nadu, India - 623501</span>
        </div>
      </div>
      {/* <div className="mt-6">
        <a
          href="tel:+919876543332"
          className="inline-block bg-primary text-white font-semibold rounded-lg px-6 py-2 hover:bg-primary/80 transition duration-300"
        >
          Call Now
        </a>
      </div> */}
    </div>
  );
};

export default ContactBox;
