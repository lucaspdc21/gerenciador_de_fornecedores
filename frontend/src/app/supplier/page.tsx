"use client";
import SuppliersComponent from "@/components/Suppliers";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface Record {
  id?: number;

}

function Supplier1() {

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
      <Supplier1/>
    </Suspense>
  );
}