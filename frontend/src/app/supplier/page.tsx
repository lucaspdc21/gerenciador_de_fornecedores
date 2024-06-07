"use client";
import SuppliersComponent from "@/components/Suppliers";
import { useParams, useSearchParams } from "next/navigation";


export default function Supplier() {
  interface Record {
    id?: number;

  }
  // recebimento das informações do supplier selecionado
  const [searchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(Array.from(searchParams.entries()));
  const recordString = paramsObject['1'];
  let record: Record = {};
  if (recordString) {
    record.id = Number(recordString);
  }


  return (
    <div>
      <SuppliersComponent id={record.id !== undefined ? record.id : 0}/>
    </div>
  );
}
