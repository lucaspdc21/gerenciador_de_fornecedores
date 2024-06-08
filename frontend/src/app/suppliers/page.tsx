import PageTitle from "@/components/generic/PageTitle";
import RegisterNewCourseForm from "@/components/RegisterSupplier/RegisterSupplier";
import { Flex} from "antd";



export default function Home() {
    return (
        <Flex className="m-4" vertical>
            <PageTitle title="Cadastrar Fornecedores" />
            <RegisterNewCourseForm />
        </Flex>   
    );
  }