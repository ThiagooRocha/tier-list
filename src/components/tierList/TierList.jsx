import "./TierList.css";

import { TierListLine } from "./TierListLine";
import { useState } from "react";

export function TierList() {
  const [lines, setLines] = useState([]);

  function createNewLine() {
    const newLine = {
      id: Math.random()
    }

    setLines(prev => [...prev, newLine])
  }

  return (
    <>
      <div id="tier-list">
        <TierListLine bgColor={'#ea580c'} />
        <TierListLine bgColor={'#f97316'} />
        <TierListLine bgColor={'#fb923c'} />

        {lines && lines.map((line) => <TierListLine key={line.id} />)}
      </div>

      <button
        onClick={createNewLine}
        className="border border-x-2 border-y-2 flex items-center justify-center border-orange-500 max-w-[1500px] w-[80%] h-24 rounded-lg cursor-pointer outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-transparent"
      >
        Adicionar Nova Linha
      </button>
    </>
  );
}
