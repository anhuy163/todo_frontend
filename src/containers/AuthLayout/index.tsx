import {} from "antd";
import { ReactNode } from "react";
import Head from "next/head";

export type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover bg-[url('https://staging.d2ar7agitimnk0.amplifyapp.com/images/Login-bg.png')]">
        {children}
      </div>
    </>
  );
}
