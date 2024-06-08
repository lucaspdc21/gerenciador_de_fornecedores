"use client";
import React, { Suspense, useEffect, useState } from 'react';
import { SuppliersService } from '../../../services/SuppliersService';
import SupplierHeader from './SupplierHeader';
import SupplierDetails from './SupplierDetails';
import SupplierContracts from './SupplierContracts';
import { Flex } from 'antd';

interface Suppliers {
  id: number;
  nome: string;
  descricao: string;
  email: string;
  cnpj: string;
  telefone: string;
  site: string;
  endereco: string;
}

interface SuppliersComponentProps {
  id: number; 
}

const SuppliersComponent = ({ id }: SuppliersComponentProps) => {
  const [suppliers, setSuppliers] = useState<Suppliers>();
  useEffect(() => {
    const sup_service = new SuppliersService();
    sup_service.listById(id)
      .then(response => {
        setSuppliers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
  if (!suppliers) {
    return <div>Loading...</div>
  }

  return (
    <Suspense>
      <Flex vertical className='overflow-auto'>
        <SupplierHeader nome={suppliers.nome} descricao={suppliers.descricao} />
        <SupplierDetails {...suppliers} />
        <SupplierContracts id={id} />
      </Flex>
    </Suspense>
  );
};

export default SuppliersComponent;