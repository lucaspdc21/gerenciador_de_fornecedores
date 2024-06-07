'use client';
import React, { useEffect, useState } from 'react';
import { Table} from 'antd';
import Link from 'next/link';
import { SuppliersService } from '../../services/SuppliersService';

const sup_service = new SuppliersService();


async function deleteAndReload(setDataSource: (data: any) => void, id: number) {
    try {
        await sup_service.delete(id);
        const response = await sup_service.listAll();
        const data = response.data;
        const formattedData = data.map((item: { id: any; nome: any; setor: any; contracts: string | any[]; }) => ({
            key: item.id,
            name: item.nome,
            grupo: item.setor,
            contrato: item.contracts.length,
        }));
        setDataSource(formattedData);
    } catch (error) {
        console.error("Erro ao deletar fornecedor: ", error);
    }
}
async function loadSuppliers(setDataSource: (data: any) => void) {
    const response = await sup_service.listAll();
    const data = response.data;
    const formattedData = data.map((item: { id: any; nome: any; setor: any; contracts: string | any[]; }) => ({
        key: item.id,
        name: item.nome,
        grupo: item.setor,
        contrato: item.contracts.length,
    }));
    setDataSource(formattedData);
}


const ForTable = () => {
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        loadSuppliers(setDataSource); // Carregar dados iniciais
    }, []);
    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: any, b: any) => a.name.localeCompare(b.name),
            className: 'bg-gray-200',
        },
        {
            title: 'Contratos (Quantidade)',
            dataIndex: 'contrato',
            key: 'contrato',
            sorter: (a: any, b: any) => a.contrato - b.contrato,
            className: 'bg-gray-200',
        },
        {
            key: "action",
            render: (_: any, record: any) => (
                <div className='text-sky-500 flex flex-col'>
                    <Link href={`/supplier?id=${record.key}`}>
                        Detalhes
                    </Link>
                    <a onClick={() => deleteAndReload(setDataSource, record.key)}>
                        Deletar
                    </a>
                </div>
            ),
            className: 'bg-gray-200',
        },
    ];
    return(
        <Table
            className='w-full'
            pagination={{ pageSize: 5 }}
            dataSource={dataSource}
            columns={columns}
        />
    );
};

export default ForTable;
