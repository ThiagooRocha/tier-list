import "./TierList.css";
import { AlignRightSimple, XCircle } from "phosphor-react"

import { TierListLine } from "./TierListLine";
import { useSelector, useDispatch } from "react-redux";

//Reducers
import { New_Line } from "../../features/reduxTierListLine";

export function TierList() {
  const tierListLines = useSelector((state) => state.tierListLine);
  const dispatch = useDispatch();

  function createNewLine() {
    dispatch(New_Line());
  }

  return (
    <>
      <div id="tier-list">
        {tierListLines.length > 0? (
          tierListLines.map((line) => (
            <TierListLine bgColor={line.bgColor} key={line.id} id={line.id} />
          ))
        ) : (
          <div className="w-full flex items-center justify-center">
            <div className="relative">
              <XCircle size={50} weight="bold" className="absolute -left-3 top-9 text-zinc-500"/>
              <AlignRightSimple size={200} className="text-zinc-700"/>
            </div>
          </div>
        )}
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
