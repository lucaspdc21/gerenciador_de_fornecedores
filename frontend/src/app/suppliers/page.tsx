import RegisterNewCourseForm from "@/components/Register";
import { Flex, Layout } from "antd";
import Title from "antd/lib/typography/Title";

export default function Home() {
    return (
        <Flex className="m-4" vertical>
            <Flex align="center" >
                <Title level={2} align-items>Cadastrar Fornecedores</Title>
            </Flex>
            <RegisterNewCourseForm />
        </Flex>   
    );
  }