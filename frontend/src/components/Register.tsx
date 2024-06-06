"use client";
import { Input, Form, Select, Switch, Space, DatePicker, Flex } from "antd"
import { SuppliersService } from "../../services/SuppliersService"

const { TextArea } = Input

interface FormValues {
  telefone: string
  endereco: string
  cnpj: string
  email: string
  site: string
  nome: string
  descricao: string
}

function FormButton() {
  return (
    <Flex className="items-center w-full justify-center">
      <button
        type="submit"
        className={`
          bg-blue-950 h-14 w-full md:w-1/4 rounded-md bg-primary text-lg font-bold text-white
          hover:bg-blue-600
        shadow focus:outline-none focus:ring
        `}
      >
        Registrar Fornecedor
      </button>
    </Flex>
  )
}


export default function RegisterNewCourseForm() {
  const [form] = Form.useForm<FormValues>()
  const suppliersService = new SuppliersService()
  const onFinish = async (values: FormValues) => {
    try {
      // Converta a data para o formato correto
  
      // Crie o objeto do fornecedor
      const supplier = {
        nome: values.nome,
        descricao: values.descricao,
        email: values.email,
        site: values.site,
        cnpj: values.cnpj,
        telefone: values.telefone,
        endereco: values.endereco,
    
        // Adicione outros campos conforme necessário
      };
      // Chame o método create do SuppliersService
      const response = await suppliersService.create(supplier);
      alert("Fornecedor registrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao registrar o fornecedor.");
    }
  }


  return (
    <section className=" bg-white p-6">
      
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="nome"
          rules={[
            {
              required: true,
              message: "Por favor, informe o nome do Fornecedor",
            },
            { min: 3, message: "O nome deve ter pelo menos 3 caracteres" },
          ]}
        >
          <Input placeholder="Insira o nome do Fornecedor" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor, informe o email de contato",
            },
            { min: 3, message: "O email deve ter pelo menos 3 caracteres" },
          ]}
        >
          <Input placeholder="Insira o email do fornecedor" size="large" />
        </Form.Item>
        <Form.Item
          name="site"
          rules={[
            {
              required: true,
              message: "Por favor, informe o site do fornecedor",
            },
            { min: 3, message: "O Site deve ter pelo menos 3 caracteres" },
          ]}
        >
          <Input placeholder="Insira o Site do fornecedor" size="large" />
        </Form.Item>
        <Space className="flex flex-wrap" size={["large", "small"]}>
          <Form.Item
            name="cnpj"
            rules={[
              {
                required: true,
                message: "Por favor, informe o CNPJ do Fornecedor",
              },
              { min: 3, message: "O nome CNPJ ter pelo menos 3 caracteres" },
            ]}
          >
            <Input placeholder="Insira o CNPJ do Fornecedor" size="large" />
          </Form.Item>
          <Form.Item
            name="telefone"
            rules={[
              {
                required: true,
                message: "Por favor, informe o telefone de contato",
              },
              { min: 3, message: "O telefone deve ter pelo menos 3 caracteres" },
            ]}
          >
            <Input placeholder="Insira o Telefone do fornecedor" size="large" />
          </Form.Item>
          <Form.Item
            name="endereco"
            rules={[
              {
                required: true,
                message: "Por favor, informe o endereço de fornecedor",
              },
              { min: 3, message: "O endereço deve ter pelo menos 3 caracteres" },
            ]}
          >
            <Input placeholder="Insira o endereço do fornecedor" size="large" />
          </Form.Item>
        </Space>
        <Space className="flex flex-wrap" size={["middle", "small"]}>
          <Form.Item>
            <Select size="large" placeholder="Setor envolvido">
              <Select.Option value="Grupo 1">Grupo 1</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Contratos ativos:">
            <Switch size="default"></Switch>
          </Form.Item>
          <Form.Item
            name="date"
            rules={[{ required: true, message: "Por favor, insira a data!" }]}
          >
            <DatePicker
              format="DD/MM/YYYY"
              size="large"
              placeholder="____/____/____"
            />
          </Form.Item>
        </Space>
        <Form.Item
          name="description"
          rules={[
            { required: true, message: "Por favor, insira uma descrição!" },
          ]}
        >
          <TextArea placeholder="Descrição do Fornecedor" rows={4} />
        </Form.Item>
        <FormButton />
      </Form>
    </section>
  )
}