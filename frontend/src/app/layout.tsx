import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/Header/Header";
import SiderComponent from "@/components/Sider";
import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { AntdRegistry } from "@ant-design/nextjs-registry";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Modulo de Fornecedores</title>
        <link rel="icon" href="/company.svg" />
      </head>
      <body>
        <HeaderComponent />
        <Layout hasSider style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
          <Flex>
            <SiderComponent />
          </Flex>
          <Content className="bg-white m-4 rounded-md">
            <AntdRegistry>{children}</AntdRegistry>
          </Content>
        </Layout>
      </body>
    </html>
  )
}
