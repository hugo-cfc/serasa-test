import ByState from "./Components/ByState";
import ByCulture from "./Components/ByCulture";
import ByUseOfTheSoil from "./Components/ByUseOfTheSoil";
import Farms from "./Components/Farms";
import Area from "./Components/Area";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-x-2">
        <Farms />

        <Area />
      </div>

      <div className="flex justify-center flex-wrap gap-2">
        <ByState />
        <ByCulture />
        <ByUseOfTheSoil />
      </div>
    </div>
  );
}
