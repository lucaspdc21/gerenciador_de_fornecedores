import { useState, useEffect } from 'react';
import { SuppliersService } from '../../../services/SuppliersService';
import {DataType} from './DataType';

export const useSupplierContracts = (id: number) => {
  const [dataType, setDataType] = useState<DataType[]>([]);

  useEffect(() => {
    const sup_service = new SuppliersService();
    sup_service.listById(id)
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
  }, [id]);

  return dataType;
};