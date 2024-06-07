"use client";
import { Avatar, Divider, Flex } from 'antd';
import React, {useEffect,useState} from 'react';
import ContractTable from './ContractTable';
import { SuppliersService } from '../../services/SuppliersService';
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
    }, []);
    if (!suppliers){
        return <div>Loading...</div>
    }

  return (
        <Flex vertical className='overflow-auto'>
            <Flex  gap={50} className='px-10 pt-10 h-full' >
                <Avatar shape='square' size={80} src="/logo_supplier.png"/>
                <Flex vertical gap={10}>
                    <h1> Nome:  {suppliers.nome}</h1>
                    <h1>Descrição:  {suppliers.descricao}</h1>
                </Flex>
            </Flex>
            <Divider plain>Dados específicos</Divider>
            <Flex vertical className='px-10'>
                <h1>Email:  {suppliers.email}</h1>
                <Flex gap={18}>
                    <h1>CNPJ:  {suppliers.cnpj}</h1>
                    <h1>Telefone:  {suppliers.telefone}</h1>
                </Flex>
                <h1>Site:  {suppliers.site}</h1>
                <h1>Endereço:  {suppliers.endereco}</h1>
            </Flex>
            <Divider plain>Contratos</Divider>
            <Flex vertical className=''>
                <ContractTable id={id !== undefined ? id : 0}/>
            </Flex>
        </Flex>
  );
};

export default SuppliersComponent;