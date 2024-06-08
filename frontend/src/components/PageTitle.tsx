import { Divider, Flex } from "antd";
import Title from "antd/lib/typography/Title";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Flex align="center">
        <Divider>
            <Title level={2}>{title}</Title>
        </Divider>
    </Flex>
  );
};

export default PageTitle;