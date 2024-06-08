import PageTitle from "@/components/PageTitle";
import RegisterNewContract from "@/components/RegisterContract";
import { Flex } from "antd";

export default function Supplier() {
  return (
    <Flex className="m-4" vertical>
      <PageTitle title="Cadastrar novo Contrato" />
      <RegisterNewContract/>
    </Flex>
  );
}
