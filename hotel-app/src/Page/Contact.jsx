import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-stone-50 px-6 py-16 text-stone-800 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Contact Us
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">We would love to hear from you</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Whether you are planning a stay, want to book an experience, or have a question,
            our team is here to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">Get in touch</h2>
            <p className="mt-3 text-stone-600">
              Visit us at the hotel, call us anytime, or send us a message and we will get back
              to you shortly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl bg-stone-100 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Address
                </p>
                <p className="mt-2 text-base text-stone-700">123 Ocean View Road, Lagos, Nigeria</p>
              </div>

              <div className="rounded-xl bg-stone-100 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Phone
                </p>
                <p className="mt-2 text-base text-stone-700">+234 800 123 4567</p>
              </div>

              <div className="rounded-xl bg-stone-100 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Email
                </p>
                <p className="mt-2 text-base text-stone-700">hello@hotelapp.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">Send us a message</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-500 px-4 py-3 font-semibold text-stone-900 transition hover:bg-amber-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;