import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header";
import SiderComponent from "@/components/Sider";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: '100vh' }}>
          <HeaderComponent />
          <Layout hasSider >
            <SiderComponent />
            <Content className="bg-white m-4 rounded-md">
                {children}
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  )
}
