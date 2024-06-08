import ForTable from "@/components/SupplierList";
import PageTitle from "@/components/generic/PageTitle";
import { Flex } from "antd";

export default function Home() {
    return (
        <Flex className="m-4" vertical>
            <PageTitle title="Lista de Fornecedores" />
            <ForTable />
        </Flex>         
    );
  }