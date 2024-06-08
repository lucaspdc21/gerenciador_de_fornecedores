import { Divider, Flex } from 'antd';
import React from 'react';
import ContractTable from '../ContractList/ContractTable'

interface SupplierContractsProps {
  id: number;
}

const SupplierContracts = ({ id }: SupplierContractsProps) => (
  <>
    <Divider plain>Contratos</Divider>
    <Flex vertical>
      <ContractTable id={id !== undefined ? id : 0}/>
    </Flex>
  </>
);

export default SupplierContracts;