"Use Client";
import { Avatar, Divider, Flex } from 'antd';
import React from 'react';
import ContractTable from './ContractTable';


const SuppliersComponent = () => {
  return (
        <Flex vertical className='overflow-auto'>
            <Flex  gap={50} className='px-10 pt-10 h-full' >
                <Avatar shape='square' size={80} src="/Microsoft_logo.svg"/>
                <Flex vertical gap={10}>
                    <h1> Nome: Microsoft</h1>
                    <h1>Descrição:</h1>
                </Flex>
            </Flex>
            <Divider plain>Dados específicos</Divider>
            <Flex vertical className='px-10'>
                <h1>email:</h1>
                <Flex>
                    <h1>cnpj:</h1>
                    <h1>telefone:</h1>
                </Flex>
                <h1>Site</h1>
                <h1>Endereço</h1>
            </Flex>
            <Divider plain>Contratos</Divider>
            <Flex vertical className=''>
                <ContractTable />
            </Flex>
        </Flex>
  );
};

export default SuppliersComponent;