import { Table } from "@/Components/Table";
import Producers from "./Components/Producers";

export default function Home() {
  return (
    <Table.Container className="flex-1 p-4">
      <h1 className="tablet:text-2xl font-bold mb-2 min-w-[80vw]">
        Produtores
      </h1>

      <div className="overflow-auto">
        <Producers />
      </div>
    </Table.Container>
  );
}
