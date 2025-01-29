"use client"
// app/get-started/page.tsx
import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const GetStartedPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Welcome to IdeaFilter!
              </h2>
              <p className="text-xl text-gray-700 mb-10">
                We&apos;re excited to have you here. Getting started is easy. Follow these simple steps to begin your journey with us.
              </p>
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Simple Steps to Get Started</h3>
                <ol className="list-decimal list-inside text-gray-600">
                  <li className="mb-2">Create your account by clicking the &quot;Sign Up Now&quot; button below.</li>
                  <li className="mb-2">Complete the onboarding process to set up your profile and preferences.</li>
                  <li className="mb-2">Start exploring our AI-powered tools to filter and curate ideas.</li>
                  <li className="mb-2">Begin your journey towards productivity and creativity with IdeaFilter!</li>
                </ol>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                    Sign Up Now <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/learn-more">
                  <button className="px-6 py-3 rounded-lg font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GetStartedPage;
