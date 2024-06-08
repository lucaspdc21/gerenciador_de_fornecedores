import ForTable from "@/components/ForTable";
import PageTitle from "@/components/PageTitle";
import { Flex } from "antd";

export default function Home() {
    return (
        <Flex className="m-4" vertical>
            <PageTitle title="Lista de Fornecedores" />
            <ForTable />
        </Flex>         
    );
  }