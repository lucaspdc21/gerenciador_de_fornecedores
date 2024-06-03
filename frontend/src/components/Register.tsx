"use client"
import { Input, Form, Select, Switch, Space, DatePicker } from "antd"

const { TextArea } = Input

interface FormValues {
  name: string
  date: null
  description: string
}

function FormButton() {
  return (
    <button
      type="submit"
      className={`
       focus:ring-bg-300 h-14 w-full rounded-md bg-primary text-lg font-bold text-white 
       shadow focus:outline-none focus:ring
      `}
    >
      Registrar Curso
    </button>
  )
}

function Title() {
  return (
    <div className="m-4 flex w-auto items-center justify-center">
      <h2 className="text-2xl font-bold">Adicionar Curso</h2>
    </div>
  )
}

export default function RegisterNewCourseForm() {
  const [form] = Form.useForm<FormValues>()
  const onFinish = (values: FormValues) => {
    alert("Curso registrado com sucesso!")
    //trabalhar com os values
  }

  return (
    <section className=" bg-white p-6">
      <Title />
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="nameCourse"
          rules={[
            {
              required: true,
              message: "Por favor, informe um nome para o curso",
            },
            { min: 3, message: "O nome deve ter pelo menos 3 caracteres" },
          ]}
        >
          <Input placeholder="Insira o nome do curso" size="large" />
        </Form.Item>
        <Form.Item
          name="nameTeacher"
          rules={[
            {
              required: true,
              message: "Por favor, informe o nome do professor",
            },
            { min: 3, message: "O nome deve ter pelo menos 3 caracteres" },
          ]}
        >
          <Input placeholder="Insira o nome do professor" size="large" />
        </Form.Item>
        <Space className="flex flex-wrap" size={["large", "small"]}>
          <Form.Item>
            <Select size="large" placeholder="Escolha um Grupo">
              <Select.Option value="Grupo 1">Grupo 1</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Select size="large" placeholder="Status">
              <Select.Option value="Completo">Completo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Demo gratuita:">
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
          <TextArea placeholder="Descrição do curso" rows={4} />
        </Form.Item>
        <FormButton />
      </Form>
    </section>
  )
}