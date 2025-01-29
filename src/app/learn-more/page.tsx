"use client"
// app/learn-more/page.tsx
import React from 'react';
import Layout from '@/components/Layout';

const LearnMorePage = () => {
  return (
    <Layout>

        <section className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
                The Problem
              </h1>
              <p className="text-xl text-gray-700 mb-10">
                So, in 2025, a LOT of solutions exist. What if a tool that covers the uncovered{' '}
                <a className="font-semibold text-pink-600">existed</a>? That&apos;s when THIS exact website that YOU are looking at RIGHT NOW comes in handy.
                A finite number of solutions exist for countless problems, but there are countless, if not infinite, ideas. The problem?
                <br /> Most of these ideas are... <span className="text-red-500">trash</span>.
                <br /> OUR platform will filter out the junk for YOU and keep you productive, while we care about the creativity. <span className="text-green-600">Innovative, right</span>?
              </p>
            </div>
          </div>
        </section>

    </Layout>
  );
};

export default LearnMorePage;
