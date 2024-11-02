import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const LandingSection: React.FC = () => {
  return (
    <section className="text-black dark:text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8">
        {/* Left Section */}
        <div className='lg:w-1/2'>
          <h2 className='text-3xl font-bold mb-4'>About Me Hesam Shamoradi</h2>
          <p className='mb-6 text-gray-400'>
            I have been a front-end developer for 7 years
            I was born in Tehran and I am skilled in my profession. My goal is unique and rare design in the web field. My skills are:
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400'>
            {[
              'Html , Css',
              'Next.js',
              'Bootstrap , Tailwind CSS',
              'JavaScript',
              'Jquery , React',
              'Wordpress',
              'Web Design',
              ' Seo'
            ].map((about, index) => (
              <div key={index} className='flex items-center'>
                <FaCheckCircle className='text-red-500 mr-2' />
                {about}
              </div>
            ))}
          </div>
        </div>


        <div className='lg:w-1/2 flex justify-center items-center'>
          <div className='w-60 h-60 flex items-center justify-center'>

            <Image src='/images/about/draclyr.jpg' width={500} height={300} alt='About Image' className='rounded-lg' />
          </div>
        </div>
      </div>


      <hr className='my-8 border-gray-700' />


      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8'>

        <div className='lg:w-1/2 flex justify-center items-center'>
          <div className='w-60 flex items-center justify-center'>
            <Image src='/images/about/draclyr2.jpg' width={500} height={300} alt='About Image' className='rounded-lg' />
          </div>
        </div>


        <div className='lg:w-1/2 space-y-4 text-gray-400'>
          <div>
            <h3 className='text-xl font-semibold text-black dark:text-white'>The purpose of my projects</h3>
            <p>
              Build a resume and template for developers.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-black dark:text-white'>My years of activity</h3>
            <p>
              I have been working in the field of front end since 2018.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-black dark:text-white'>Topics of my projects</h3>
            <p>
              Personal, resume, corporate and store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
