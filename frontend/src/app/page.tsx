import ForTable from "@/components/ForTable";
import { Flex } from "antd";
import Title from "antd/lib/typography/Title";


export default function Home() {
    return (
        <Flex className="m-4" vertical>
            <Flex align="center" >
                <Title level={2} align-items>Lista de Fornecedores</Title>
            </Flex>
            <ForTable />
        </Flex>         
    );
  }