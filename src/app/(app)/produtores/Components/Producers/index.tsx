"use client";

import { useRouter } from "next/navigation";
import { Edit, Trash } from "lucide-react";

import { Table } from "@/Components/Table";
import formatCpf from "@/utils/formatCpf";

const Producers = () => {
  const router = useRouter();

  return (
    <Table.Root>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Nome</Table.Th>
          <Table.Th>CPF</Table.Th>
          <Table.Th>Fazenda</Table.Th>
          <Table.Th>Cidade</Table.Th>
          <Table.Th className="w-4">Estado</Table.Th>
          <Table.Th className="w-8">Ações</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <tbody>
        <Table.Tr>
          <Table.Td
            className="cursor-pointer"
            onClick={() => router.push("/produtores/384793")}
          >
            HUGO CESAR FIRMINO COSTA
          </Table.Td>
          <Table.Td
            className="cursor-pointer"
            onClick={() => router.push("/produtores/384793")}
          >
            {formatCpf("11111111111")}
          </Table.Td>
          <Table.Td>FAZENDA TOTAL FORMA</Table.Td>
          <Table.Td>MACEIÓ</Table.Td>
          <Table.Td>AL</Table.Td>
          <Table.Td>
            <div className="flex">
              <button onClick={() => router.push("/produtores/384793?edit")}>
                <Edit className="text-sm w-5" />
              </button>

              <button>
                <Trash className="text-red-600 w-5" />
              </button>
            </div>
          </Table.Td>
        </Table.Tr>
      </tbody>
    </Table.Root>
  );
};

export default Producers;
