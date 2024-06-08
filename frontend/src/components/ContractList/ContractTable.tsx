"use client";
import React from 'react';
import { Table } from 'antd';
import { useSupplierContracts } from './UseSupplierContracts';
import { ContractTableProps} from './ContractTableProps';
import { columns } from './ContractTableColumns';

const ContractTable = ({ id }: ContractTableProps) => {
  const dataType = useSupplierContracts(id);

  return (
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