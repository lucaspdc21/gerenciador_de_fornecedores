import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/Header";
import SiderComponent from "@/components/Sider";
import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <Layout hasSider style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
          <Flex>
            <SiderComponent />
          </Flex>
          <Content className="bg-white m-4 rounded-md">
              {children}
          </Content>
        </Layout>
      </body>
    </html>
  )
}
