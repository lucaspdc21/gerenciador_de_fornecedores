import { Divider, Flex } from 'antd';
import React from 'react';

interface SupplierDetailsProps {
  email: string;
  cnpj: string;
  telefone: string;
  site: string;
  endereco: string;
}

const SupplierDetails = ({ email, cnpj, telefone, site, endereco }: SupplierDetailsProps) => (
  <>
    <Divider plain>Dados específicos</Divider>
    <Flex vertical className='px-10'>
      <h1>Email: {email}</h1>
      <Flex gap={18}>
        <h1>CNPJ: {cnpj}</h1>
        <h1>Telefone: {telefone}</h1>
      </Flex>
      <h1>Site: {site}</h1>
      <h1>Endereço: {endereco}</h1>
    </Flex>
  </>
);

export default SupplierDetails;