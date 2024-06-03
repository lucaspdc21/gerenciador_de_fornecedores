'use client';
import React from 'react';
import { Table} from 'antd';
import Link from 'next/link';


const dataSource = [
    {
        key: '1',
        name: 'Mike',
        grupo: 'Dev',
        contrato: 12,
    },
    {
        key: '2',
        name: 'John',
        grupo: 'QA',
        contrato: 24,
    },
    {
        key: '3',
        name: 'Alice',
        grupo: 'UX',
        contrato: 36,
    },
    {
        key: '4',
        name: 'Alice',
        grupo: 'UX',
        contrato: 36,
    },
    {
        key: '5',
        name: 'Alice',
        grupo: 'UX',
        contrato: 36,
    },
    {
        key: '6',
        name: 'Alice',
        grupo: 'UX',
        contrato: 36,
    },
    {
        key: '7',
        name: 'Alice',
        grupo: 'UX',
        contrato: 36,
    },
    {
        key: '8',
        name: 'Alice',
        grupo: 'UX',
        contrato: 36,
    },    {
        key: '9',
        name: 'Alice',
        grupo: 'UX',
        contrato: 36,
    },
    {
        key: '10',
        name: 'Alice',
        grupo: 'UX',
        contrato: 36,
    },
];



const columns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: any, b: any) => a.name.localeCompare(b.name),
        className: 'bg-gray-200',
        
    },
    {
        title: 'Grupo',
        dataIndex: 'grupo',
        key: 'grupo',
        sorter: (a: any, b: any) => a.grupo.localeCompare(b.grupo),
        className: 'bg-gray-200',
        
    },
    {
        title: 'Contrato (meses)',
        dataIndex: 'contrato',
        key: 'contrato',
        sorter: (a: any, b: any) => a.contrato - b.contrato,
        className: 'bg-gray-200',
       
    },
    {
        title: "Action",
        key: "action",
        render: (_: any, record: any) => {
            return (
                <div className='text-sky-500 '>
                    <Link href={{
                        pathname : '/edit',
                        query: { record: JSON.stringify(record) }
                    }}>Editar</Link>
                </div>
            );
        },
        className: 'bg-gray-200',
    },
];


const ForTable = () => {

    return (
        <Table
            className='w-full'
            pagination={{ pageSize: 5 }}
            dataSource={dataSource}
            columns={columns}
        />
    );
};

export default ForTable;
