"use client";
import SuppliersComponent from "@/components/Suppliers";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// página que mostra um fornecedor específico, ela recebe o id do fornecedor da pagina home
// suspense e a separação necessários para se adequar a Eslint

interface Record {
  id?: number;
}

function SupplierUseSearch() {
  // recebimento das informações do supplier selecionado
  const [searchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(Array.from(searchParams.entries()));
  const recordString = paramsObject['1'];
  let record: Record = {};
  if (recordString) {
    record.id = Number(recordString);
  }
  return (
      <SuppliersComponent id={record.id !== undefined ? record.id : 0}/>
  );
}

export default function Supplier(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupplierUseSearch/>
    </Suspense>
  );
}