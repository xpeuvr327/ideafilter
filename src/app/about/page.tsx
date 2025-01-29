// pages/about.tsx
import React from 'react';
import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <section className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                About Us
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Welcome to IdeaFilter. We are dedicated to transforming ideas into impact. Our AI-powered platform helps you focus on ideas that matter, transforming creativity into productivity.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
