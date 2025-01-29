// app/signup/page.tsx
import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SignUpPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <section className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Sign Up
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Due to high server constraints and affluence, we can&apos;t keep up with creating accounts automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-demo">
                  <button className="px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                    Book a Demo <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-6 py-3 rounded-lg font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2">
                    Contact Us
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

export default SignUpPage;
