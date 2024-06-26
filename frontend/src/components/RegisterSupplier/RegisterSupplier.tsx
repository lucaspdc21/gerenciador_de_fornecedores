"use client";
import { Input, Form, Select, Switch, Space, DatePicker } from "antd"
import { SuppliersService } from "../../../services/SuppliersService"
import FormButton from "../generic/FormButton";

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

export default function RegisterNewSupplier() {
  const [form] = Form.useForm<FormValues>()
  const suppliersService = new SuppliersService()
  const onFinish = async (values: FormValues) => {
    try {
  
      // Criação do objeto do fornecedor
      const supplier = {
        nome: values.nome,
        descricao: values.descricao,
        email: values.email,
        site: values.site,
        cnpj: values.cnpj,
        telefone: values.telefone,
        endereco: values.endereco,
    
      };
      // response caso seja necessário	
      const response = await suppliersService.create(supplier);
      alert("Fornecedor registrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao registrar o fornecedor.");
    }
  }


  return (
    <section className=" bg-white px-6">
      
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
              <Select.Option value="Grupo 1">Administrativo</Select.Option>
              <Select.Option value="Grupo 2">TI</Select.Option>
              <Select.Option value="Grupo 3">Engenharia</Select.Option>
              <Select.Option value="Grupo 4">Design</Select.Option>
              <Select.Option value="Grupo 5">RH</Select.Option>
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
          name="descricao"
          rules={[
            { required: true, message: "Por favor, insira uma descrição!" },
          ]}
        >
          <TextArea placeholder="Descrição do Fornecedor" rows={4} />
        </Form.Item>
        <FormButton text="Registrar Fornecedor" />
      </Form>
    </section>
  )
}