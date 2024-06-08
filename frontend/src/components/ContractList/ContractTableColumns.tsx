import type { TableColumnsType } from 'antd';
import { DataType } from './DataType';

export const columns: TableColumnsType<DataType> = [
  { title: 'Nome', dataIndex: 'name', key: 'name' },
  { title: 'Valor', dataIndex: 'valor', key: 'valor' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];