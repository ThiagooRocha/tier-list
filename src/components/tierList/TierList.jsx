import "./TierList.css";
import { AlignRightSimple, XCircle } from "phosphor-react";

//Components
import { TierListLine } from "./TierListLine";

//Reducers
import { useSelector, useDispatch } from "react-redux";
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
        {tierListLines.length > 0 ? (
          <>
            {tierListLines.map((line) => (
              <TierListLine
                key={line.id}
                id={line.id}
                bgColor={line.bgColor}
                title={line.title}
                imgs={line.items}
              />
            ))}
          </>
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
        className="max-w-[1500px] w-[85%] md:w-[50%] ml-auto h-12 transition-all text-zinc-400 font-semibold border-2 border-zinc-300 dark:text-zinc-500 dark:border-zinc-800 hover:text-zinc-700 hover:bg-zinc-300 hover:ring-2 hover:ring-zinc-300 hover:ring-offset-1 rounded-lg cursor-pointer outline-none focus:bg-zinc-300 focus:text-zinc-700 focus:ring-2 focus:ring-zinc-300 focus:ring-offset-1 focus:ring-offset-zinc-100 dark:hover:text-zinc-100 dark:hover:bg-zinc-700 dark:hover:ring-zinc-700 dark:hover:ring-offset-zinc-700 dark:focus:bg-zinc-700 dark:focus:text-zinc-100 dark:focus:ring-zinc-700 dark:focus:ring-offset-zinc-700"
      >
        ✨ Adicionar nova linha
      </button>
    </>
  );
}
