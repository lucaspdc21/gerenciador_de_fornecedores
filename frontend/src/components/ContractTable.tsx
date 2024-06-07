"use client";
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { SuppliersService } from '../../services/SuppliersService';

interface DataType {
  key: React.Key;
  name: string;
  valor: number;
  status: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Nome', dataIndex: 'name', key: 'name' },
  { title: 'Valor', dataIndex: 'valor', key: 'valor' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  {
    
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];


const ContractTable = () => {
  const [dataType, setDataType] = useState<DataType[]>([]);
  useEffect(() => {
    const sup_service = new SuppliersService();
    sup_service.listById(1)
      .then(response => {
        const contracts = response.data.contracts.map((contract: any, index: number) => ({
          key: index,
          name: contract.nome,
          valor: contract.valor,
          status: contract.status,
        }));
        setDataType(contracts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return(
  <Table
    columns={columns}
    pagination={{ pageSize: 3 }}
    scroll={{ y: 120 }}
    expandable={{
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.status}</p>,
      rowExpandable: (record) => record.name !== 'Not Expandable',

    }}
    dataSource={dataType}
  />
  );
  };

export default ContractTable;