'use client';
import React from 'react';
import { Table, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import sortOrder from 'antd/es/table/interface';
import Link from 'next/link';

interface MyRecord {
    key?: string;
    name?: string;
    grupo?: string;
    contrato?: number;
}

const defaultDataSource = [
    {
        key: '1',
        name: 'Mike',
        grupo: 'Dev',
        contrato: 12,
    },
 
];



const columns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: any, b: any) => a.name.localeCompare(b.name),
        
    },
    {
        title: 'Grupo',
        dataIndex: 'grupo',
        key: 'grupo',
        sorter: (a: any, b: any) => a.grupo.localeCompare(b.grupo),
        
    },
    {
        title: 'Contrato (meses)',
        dataIndex: 'contrato',
        key: 'contrato',
        sorter: (a: any, b: any) => a.contrato - b.contrato,
       
    },
    {
        title: "Action",
        key: "action",
        render: (_: any, record: any) => {
            return (
                <div>
                    <Link href={{
                        pathname : '/edit',
                        query: { record: JSON.stringify(record) }
                    }}>Editar</Link>
                </div>
            );
        }
    },
];


const ForTable = () => {
    const [searchParams] = useSearchParams();
    let paramsObject: Record<string, string> = {};
    if (searchParams) {
        paramsObject = Object.fromEntries(Array.from(searchParams.entries()));
    }
    const recordString = paramsObject['1'];
    let record: MyRecord = {};
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

    // Definindo o estado para dataSource
    const [dataSource, setDataSource] = useState<MyRecord[]>(defaultDataSource);

    // Atualizando o dataSource quando o componente é montado
    useEffect(() => {
        if (record) {
            setDataSource(prevState => {
                // Verifica se o registro já existe no estado
                const recordExists = prevState.some((rec) => rec.key === record.key);
    
                // Se o registro não existir, adiciona ao estado
                if (!recordExists) {
                    return [...prevState, record];
                }
    
                // Se o registro já existir, retorna o estado atual
                return prevState;
            });
        }
    }, [record]);


    const [sortOrder, setSortOrder] = useState({
        name: null,
        grupo: null,
        contrato: null,
    });

    const handleSort = (dataIndex: string, sortOrder: any) => {
        setSortOrder({ ...sortOrder, [dataIndex]: sortOrder });
    };

    return (
        <Table
            pagination={{ pageSize: 5 }}
            dataSource={dataSource}
            columns={columns}

        />
    );
};

export default ForTable;
