'use client';
import React, { useEffect, useState } from 'react';
import { Table} from 'antd';
import Link from 'next/link';
import { SuppliersService } from '../../services/SuppliersService';

const columns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: any, b: any) => a.name.localeCompare(b.name),
        className: 'bg-gray-200',
        
    },
    {
        title: 'Setor',
        dataIndex: 'setor',
        key: 'setor',
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
                <div className='text-sky-500'>
                    <Link href={`/supplier/${record.key}`}>
                        Detalhes
                    </Link>
                </div>
            );
        },
        className: 'bg-gray-200',
    },
];


const ForTable = () => {
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        const sup_service = new SuppliersService();
        sup_service.listAll()
            .then(response => {
                const data = response.data;
                const formattedData = data.map((item: { id: any; nome: any; setor: any; contracts: string | any[]; }) => ({
                    key: item.id,
                    name: item.nome,
                    grupo: item.setor,
                    contrato: item.contracts.length,
                }));
                setDataSource(formattedData);
            });
    }, []);
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
