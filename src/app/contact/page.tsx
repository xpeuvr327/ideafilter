// app/contact/page.tsx
import React from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <section className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                We&apos;d love to hear from you! Feel free to reach out using any of the methods below.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Email Contact */}
              <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
                <p className="text-gray-600">business-enquiries@ideafilter.com</p>
              </div>
              {/* Phone Contact */}
              <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              {/* Address Contact */}
              <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Address</h3>
                <p className="text-gray-600">1234 Innovation Lane, Tech City, CA 94043</p>
              </div>
            </div>
            {/* Contact Form */}
            <div className="mt-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h2>
              <form className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Book a live demo..."
                    rows={5}
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
