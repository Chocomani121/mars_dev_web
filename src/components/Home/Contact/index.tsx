'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { COUNTRY_OPTIONS } from '@/data/country-options'

const Contactform = () => {
  // 1. Initialize state for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    message: ''
  });
  const [status, setStatus] = useState("");

  // 2. Update state as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. The Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent! Check your inbox.");
        setFormData({ firstName: '', lastName: '', email: '', country: '', message: '' });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className='overflow-x-hidden bg-darkmode dark:bg-white md:pt-44'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0'>
          
          {/* LEFT SIDE INFO */}
          <div
            className='row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center justify-start'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-sm text-grey'>Contact Us</span>
            </div>
            <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-orange py-12'>
              Let’s discuss about your project and take it the next level.
            </h2>
            <div className='grid grid-cols-6 pb-12 border-b border-dark_border '>
              <div className='col-span-3'>
                <span className='text-grey text-lg'>Phone</span>
                <p className='bg-transparent border-0 text-orange text-lg'>+63-32-520-8534</p>
              </div>
              <div className='col-span-3'>
                <span className='text-grey text-lg'>Email</span>
                <p className='bg-transparent border-0 text-orange text-lg'>admin@ashgard.com.ph</p>
              </div>
              <div className='col-span-6 pt-8'>
                <span className='text-grey text-lg'>Location</span>
                <p className='bg-transparent border-0 text-orange text-lg'>
                  C. Congson St., Cambiohan, Casili, Consolacion, Cebu, Philippines
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
            className="relative before:content-[''] before:absolute before:bg-[url('/images/contact/form-line.png')] before:bg-no-repeat before:w-[13rem] before:h-24 before:top-5% before:bg-contain before:left-[35%] before:z-1 before:translate-x-full lg:before:inline-block before:hidden after:content-[''] after:absolute after:bg-[url('/images/contact/from-round-line.png')] after:bg-no-repeat after:w-[6.3125rem] after:h-[6.3125rem] after:bg-contain after:top-1/2 after:-left-[25%] after:z-1 after:translate-x-1/2 after:translate-y-1/2 md:after:inline-block after:hidden md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13">
            <div className='lg:mt-0 mt-8 bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10'>
              <h2 className='sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-white'>
                Start the project
              </h2>
              
              <form onSubmit={handleSubmit} className='flex w-full m-auto justify-between flex-wrap gap-4'>
                <div className='flex gap-4 w-full'>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary rounded-lg focus-visible:outline-0'
                    type='text'
                    placeholder='First name'
                  />
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary rounded-lg focus-visible:outline-0'
                    type='text'
                    placeholder='Last name'
                  />
                </div>
                <div className='w-full'>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type='email'
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary rounded-lg focus-visible:outline-0'
                    placeholder='youremail@website.com'
                  />
                </div>
                <div className='w-full'>
                  <input
                    list='country-list'
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                    placeholder='Country'
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary rounded-lg focus-visible:outline-0'
                  />
                  <datalist id='country-list'>
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.code} value={c.name} />
                    ))}
                  </datalist>
                </div>
                <div className='w-full'>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary rounded-lg focus-visible:outline-0'
                    placeholder='Let us know about your project'></textarea>
                </div>

                <div className='w-full'>
                  <button
                    className='w-full bg-orange hover:bg-orange/90 text-white py-3 rounded-lg font-bold transition-all disabled:opacity-50'
                    type='submit'
                    disabled={status === "Sending..."}>
                    {status === "Sending..." ? "Sending..." : "Submit Inquiry"}
                  </button>
                  {status && <p className="mt-4 text-center text-sm font-semibold text-orange">{status}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactform