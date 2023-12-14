"use client";

import { useRouter } from "next/navigation";
import { Edit, Trash } from "lucide-react";
import { useQuery } from "react-query";

import { Table } from "@/Components/Table";
import formatCpf from "@/utils/formatCpf";
import getProducers from "@/fetchers/producers/getProducers";

const Producers = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery("producers", () => getProducers());

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
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <Table.Tr key={index}>
                <Table.Td isLoading={isLoading} />
                <Table.Td isLoading={isLoading} />
                <Table.Td isLoading={isLoading} />
                <Table.Td isLoading={isLoading} />
                <Table.Td isLoading={isLoading} />
                <Table.Td isLoading={isLoading} />
              </Table.Tr>
            ))}
          </>
        ) : (
          data?.map((producer) => (
            <Table.Tr key={producer.id}>
              <Table.Td
                className="cursor-pointer"
                onClick={() => router.push(`/produtores/${producer.id}`)}
              >
                {producer.name}
              </Table.Td>
              <Table.Td
                className="cursor-pointer"
                onClick={() => router.push(`/produtores/${producer.id}`)}
              >
                {formatCpf(producer.cpf)}
              </Table.Td>
              <Table.Td>{producer.farms[0].farmName}</Table.Td>
              <Table.Td>{producer.farms[0].city}</Table.Td>
              <Table.Td>{producer.farms[0].state}</Table.Td>
              <Table.Td>
                <div className="flex">
                  <button
                    onClick={() =>
                      router.push(`/produtores/${producer.id}?edit`)
                    }
                  >
                    <Edit className="text-sm w-5" />
                  </button>

                  <button>
                    <Trash className="text-red-600 w-5" />
                  </button>
                </div>
              </Table.Td>
            </Table.Tr>
          ))
        )}
      </tbody>
    </Table.Root>
  );
};

export default Producers;
