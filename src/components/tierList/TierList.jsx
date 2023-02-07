import "./TierList.css";
import { AlignRightSimple, XCircle } from "phosphor-react";

//Drag and Droop
import { DragDropContext } from "react-beautiful-dnd";

import { TierListLine } from "./TierListLine";
import { useSelector, useDispatch } from "react-redux";

//Reducers
import { New_Line } from "../../features/reduxTierListLine";
import { Drag_Item } from "../../features/reduxTierListLine";

export function TierList() {
  const tierListLines = useSelector((state) => state.tierListLine);
  const dispatch = useDispatch();

  function createNewLine() {
    dispatch(New_Line());
  }

  return (
    <>
      <div id="tier-list">
        {tierListLines.length > 0 ? (
          <DragDropContext
            onDragEnd={(result) =>
              dispatch(Drag_Item({ result, tierListLines }))
            }
          >
            {tierListLines.map((line) => (
              <TierListLine
                key={line.id}
                bgColor={line.bgColor}
                id={line.id}
                imgs={line.items}
              />
            ))}
          </DragDropContext>
        ) : (
          <div className="w-full flex items-center justify-center">
            <div className="relative">
              <XCircle
                size={50}
                weight="bold"
                className="absolute -left-3 top-9 text-zinc-500"
              />
              <AlignRightSimple size={200} className="text-zinc-700" />
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
