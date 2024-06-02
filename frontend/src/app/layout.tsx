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
        <Layout>
          <HeaderComponent />
          <Layout hasSider >
            <SiderComponent />
            <Content>
              <div className="m-4 h-full bg-white">
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  )
}
