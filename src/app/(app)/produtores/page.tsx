import { Table } from "@/Components/Table";
import Producers from "./Components/Producers";
import NewProducer from "./Components/NewProducer";

export default function Home() {
  return (
    <Table.Container className="flex-1 p-4 desktop:min-w-[80vw]">
      <div className="flex justify-between items-center mb-2">
        <h1 className="tablet:text-2xl font-bold mb-2">Produtores</h1>

        <NewProducer />
      </div>

      <div className="overflow-auto">
        <Producers />
      </div>
    </Table.Container>
  );
}
