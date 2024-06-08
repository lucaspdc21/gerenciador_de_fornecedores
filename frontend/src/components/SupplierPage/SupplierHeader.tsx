import { Avatar, Flex } from 'antd';
import React from 'react';

interface SupplierHeaderProps {
  nome: string;
  descricao: string;
}

const SupplierHeader = ({ nome, descricao }: SupplierHeaderProps) => (
  <Flex gap={50} className='px-10 pt-10 h-full'>
    <Avatar shape='square' size={80} src="/logo_supplier.png"/>
    <Flex vertical gap={10}>
      <h1> Nome: {nome}</h1>
      <h1>Descrição: {descricao}</h1>
    </Flex>
  </Flex>
);

export default SupplierHeader;