'use client'

import React, { useState } from 'react'
import { COUNTRY_OPTIONS } from '@/data/country-options'

const inputClass =
  'text-midnight_text w-full text-base bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary rounded-lg focus-visible:outline-0'

export default function Contactform() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Sending…')

    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await res.json()

      if (res.ok && result.success) {
        setStatus('Sent. We will get back to you soon.')
        form.reset()
      } else {
        setStatus(result.error ?? 'Could not send. Try again later.')
      }
    } catch {
      setStatus('Network error. Try again.')
    }
  }

  return (
    <section className='overflow-x-hidden bg-darkmode dark:bg-white md:pt-44'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid grid-cols-1 gap-0 md:grid-cols-12 md:gap-7'>
          <div
            className='col-end-12 row-start-1 row-end-2 col-start-1 md:col-end-7'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex items-center justify-start gap-2'>
              <span className='h-3 w-3 rounded-full bg-success' />
              <span className='text-sm font-medium text-grey'>Contact Us</span>
            </div>
            <h2 className='py-12 text-[28px] font-bold leading-tight text-orange sm:text-4xl'>
              Let’s discuss about your project and take it the next level.
            </h2>
            <div className='grid grid-cols-6 border-b border-dark_border pb-12'>
              <div className='col-span-3'>
                <span className='text-lg text-grey'>Phone</span>
                <p className='text-lg text-orange'>+63-32-520-8534</p>
              </div>
              <div className='col-span-3'>
                <span className='text-lg text-grey'>Email</span>
                <p className='text-lg text-orange'>admin@ashgard.com.ph</p>
              </div>
              <div className='col-span-6 pt-8'>
                <span className='text-lg text-grey'>Location</span>
                <p className='text-lg text-orange'>
                  C. Congson St., Cambiohan, Casili, Consolacion, Cebu, Philippines
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
            className="relative col-start-1 col-end-13 row-start-2 row-end-2 before:hidden before:absolute before:left-[35%] before:top-5% before:z-1 before:h-24 before:w-[13rem] before:translate-x-full before:bg-[url('/images/contact/form-line.png')] before:bg-contain before:bg-no-repeat before:content-[''] after:hidden after:absolute after:-left-[25%] after:top-1/2 after:z-1 after:h-[6.3125rem] after:w-[6.3125rem] after:translate-x-1/2 after:translate-y-1/2 after:bg-[url('/images/contact/from-round-line.png')] after:bg-contain after:bg-no-repeat after:content-[''] md:col-start-8 md:row-start-1 lg:before:inline-block md:after:inline-block">
            <div className='relative z-10 m-auto mt-8 max-w-[50rem] rounded-md bg-white px-[2.375rem] pb-8 pt-[2.1875rem] dark:bg-darkmode lg:mt-0'>
              <h2 className='mb-3 text-lg font-bold text-midnight_text dark:text-white sm:text-3xl'>
                Start the project
              </h2>

              <form onSubmit={handleSubmit} className='m-auto flex w-full flex-wrap justify-between gap-4'>
                <div className='flex w-full gap-4'>
                  <input
                    name='firstName'
                    required
                    className={inputClass}
                    type='text'
                    placeholder='First name'
                  />
                  <input
                    name='lastName'
                    required
                    className={inputClass}
                    type='text'
                    placeholder='Last name'
                  />
                </div>
                <div className='w-full'>
                  <input
                    name='email'
                    required
                    type='email'
                    className={inputClass}
                    placeholder='youremail@website.com'
                  />
                </div>
                <div className='w-full'>
                  <input
                    list='country-list'
                    name='country'
                    placeholder='Country'
                    className={inputClass}
                  />
                  <datalist id='country-list'>
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.code} value={c.name} />
                    ))}
                  </datalist>
                </div>
                <div className='w-full'>
                  <textarea
                    name='message'
                    required
                    className={`${inputClass} h-[9.375rem]`}
                    placeholder='Let us know about your project'
                  />
                </div>

                <div className='w-full'>
                  <button
                    type='submit'
                    disabled={status === 'Sending…'}
                    className='w-full rounded-lg bg-orange py-3 font-bold text-white transition-all hover:bg-orange/90 disabled:opacity-50'>
                    {status === 'Sending…' ? 'Sending…' : 'Submit Inquiry'}
                  </button>
                  {status ? (
                    <p className='mt-4 text-center text-sm font-semibold text-orange'>{status}</p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
