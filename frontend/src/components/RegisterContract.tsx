"use client";
import { Input, Form, Select, Flex } from "antd"
import { SuppliersService } from "../../services/SuppliersService"
import { useEffect, useState } from "react";

interface Supplier {
  key: number;
  name: string;
  grupo: string;
  contrato: number;
}
interface FormValues {
  valor: number
  status: string
  nome: string
  supplier : number
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
        Registrar Contrato
      </button>
    </Flex>
  )
}


export default function RegisterNewContract() {
  const [form] = Form.useForm<FormValues>()
  const [suppliers, setSuppliers] = useState<Supplier[]>([]); 

  //chama metodo deffinnido em Services
  const suppliersService = new SuppliersService()
  const onFinish = async (values: FormValues) => {
    try {

      const contract = {
        nome: values.nome,
        valor: values.valor,
        status: values.status,
      };
      let supplierId = values.supplier;
      const response = await suppliersService.createContract( supplierId, contract);
      alert("Contrato registrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao registrar o contrato!");
    }
  }
  useEffect(() => {
    suppliersService.listAll()
      .then(response => {
        const data = response.data;
        const formattedData = data.map((item: { id: any; nome: any; setor: any; contracts: string | any[]; }) => ({
          key: item.id,
          name: item.nome,
          grupo: item.setor,
          contrato: item.contracts.length,
        }));
        setSuppliers(formattedData); 
      });
  }, [suppliersService]);


  return (
    <section className=" bg-white p-6">
      
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="nome"
          rules={[
            {
              required: true,
              message: "Por favor, informe o nome do Contrato",
            },
            { min: 3, message: "O nome deve ter pelo menos 3 caracteres" },
          ]}
        >
          <Input placeholder="Insira o nome do Contrato" size="large" />
        </Form.Item>
        <Form.Item
          name="valor"
          rules={[
            {
              required: true,
              message: "Por favor, informe o valor do contrato",
            },
          ]}
        >
          <Input placeholder="Insira o valor do contrato" size="large" />
        </Form.Item>
        <Form.Item name="status">
            <Select size="large" placeholder="Status">
              <Select.Option value="PENDENTE">PENDENTE</Select.Option>
              <Select.Option value="EM_ANDAMENTO">EM_ANDAMENTO</Select.Option>
              <Select.Option value="FINALIZADO">FINALIZADO</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item name="supplier">
            <Select size="large" placeholder="Fornecedor">
              {suppliers.map(supplier => ( // mapeia os fornecedores para criar as opções do Select
                <Select.Option key={supplier.key} value={supplier.key}>
                  {supplier.name}
                </Select.Option>
              ))}
            </Select>
        </Form.Item>
        <FormButton />
      </Form>
    </section>
  )
}