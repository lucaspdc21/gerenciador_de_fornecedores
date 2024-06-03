"use client";
import { useSearchParams } from 'next/navigation';
import { Form, Input, Button, Layout } from "antd";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { format } from 'url';



function EditPage() {
    interface Record {
        key?: string;
        name?: string;
        grupo?: string;
        contrato?: string;
    }
    // recebimento das informações do usuário selecionado
    const [searchParams] = useSearchParams();
    const paramsObject = Object.fromEntries(Array.from(searchParams.entries()));
    const recordString = paramsObject['1'];
    let record: Record = {};
    console.log('All parameters:', paramsObject);

    if (recordString) {
        try {
            record = JSON.parse(recordString);
            console.log(record);
        } catch (error) {
            console.error('Error parsing record:', error);
        }
    }
    const { key, name, grupo, contrato } = record;

    //envio de informações para a tabela
    const router = useRouter();
    const onSubmit = (values: Record) => {
        
        const recordString = JSON.stringify(values);
        const urlObject = {
            pathname: '/teste2',
            query: { record: recordString },
        };
        const urlString = format(urlObject);
        router.push(urlString);
    };

    return (
        <Layout>
            <Form
                name="edit"
                initialValues={{ key, name, grupo, contrato }}
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Key"
                    name="key"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Grupo"
                    name="grupo"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contrato"
                    name="contrato"
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
}

export default EditPage;