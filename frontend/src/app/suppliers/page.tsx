import PageTitle from "@/components/PageTitle";
import RegisterNewCourseForm from "@/components/Register";
import { Flex} from "antd";



export default function Home() {
    return (
        <Flex className="m-4" vertical>
            <PageTitle title="Cadastrar Fornecedores" />
            <RegisterNewCourseForm />
        </Flex>   
    );
  }