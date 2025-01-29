
"use client"
import { LoginForm } from "@/components/login-form"
import Layout from '@/components/Layout';

const Page = ()=> {
  return (
    <Layout><div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
    </Layout>
  );
};
export default Page;
