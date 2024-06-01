import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from 'antd';
import HeaderComponent from '@/components/Header';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <Layout>
          <HeaderComponent/>
          {children}
        </Layout></AntdRegistry>
    </body>
  </html>
);

export default RootLayout;