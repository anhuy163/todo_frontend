import Head from "next/head";
import { ReactNode } from "react";
import { Layout, Menu } from "antd";
import {
  CalendarOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { getMenuItem } from "@/src/app/helper";
import Link from "next/link";
import { useRouter } from "next/router";

const { Content, Footer, Header } = Layout;

export type LayoutProps = {
  title: string;
  children: ReactNode;
};

export default function LayoutContainer({ title, children }: LayoutProps) {
  const router = useRouter();

  const menuItems = [
    getMenuItem(
      <Link href={"/account"}>Account</Link>,
      "/account",
      <UserOutlined />
    ),
    getMenuItem(
      <button onClick={() => router.push("/login")}>Log out</button>,
      null,
      <LogoutOutlined />
    ),
  ];
  return (
    <div className="h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Header>
          <div className="min-w-full flex justify-between items-center">
            <div className=" text-cyan-50 font-mono text-2xl font-bold flex justify-between items-center w-40">
              <CalendarOutlined />
              <Link href={"/"}>Todo 2023</Link>
            </div>
            <div className="w-64">
              <Menu
                defaultSelectedKeys={[router.pathname]}
                theme="dark"
                mode="horizontal"
                items={menuItems}
              />
            </div>
          </div>
        </Header>
        <div className="h-[calc(100vh_-_133px)] overflow-auto overflow-x-hidden px-[50px] pt-2 bg-slate-200">
          {children}
        </div>
        <Footer>
          <div className="text-center ">Designed and developed by An Huy</div>
        </Footer>
      </Layout>
    </div>
  );
}
