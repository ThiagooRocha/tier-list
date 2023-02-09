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
        className="max-w-[1500px] w-[85%] md:w-[50%] ml-auto h-12 text-zinc-400 font-semibold border-2 border-zinc-300 hover:text-zinc-700 hover:bg-zinc-300 hover:ring-2 hover:ring-zinc-300 hover:ring-offset-1 rounded-lg cursor-pointer outline-none focus:bg-zinc-300 focus:text-zinc-700 focus:ring-2 focus:ring-zinc-300 focus:ring-offset-1 focus:ring-offset-zinc-100"
      >
       ✨ Adicionar nova linha
      </button>
    </>
  );
}
