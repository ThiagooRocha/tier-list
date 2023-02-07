import * as Popover from "@radix-ui/react-popover";

import { Check, DotsThreeOutline, X } from "phosphor-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

//Reducers
import { Delete_Line } from "../../features/reduxTierListLine";

const squareColor = [
  "#ec4899",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#0ea5e9",
  "#3b82f6",
  "#8b5cf6",
  "#a855f7",
];

export function PopoverEdit({ id, setbgColor }) {
  const [hex, setHex] = useState("");
  const dispatch = useDispatch();

  function changeHEXBackgroundColor(e) {
    e.preventDefault()

    if (hex !== "") {
      setbgColor(hex);
    }
  }

  function deleteLine() {
    dispatch(Delete_Line({ id: id }));
  }

  return (
    <div className="w-12 h-full relative p-1">
      <Popover.Root>
        <Popover.Trigger className="bg-zinc-900 w-full flex items-center justify-center rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-zinc-700">
          <DotsThreeOutline size={25} className={"text-zinc-100"} />
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content className="bg-zinc-900 w-56 rounded-lg p-3 mx-1">
            <Popover.Close className="absolute right-2 top-1 rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-zinc-800">
              <X size={20} className="text-zinc-100" />
            </Popover.Close>
            <Popover.Arrow className="fill-zinc-900" />

            <div className="flex flex-col justify-center">
              <div className="w-full rounded-md grid grid-cols-8 gap-2 bg-zinc-800 p-2 mt-5 mb-3">
                {squareColor.map((square, i) => (
                  <SquareColor
                    key={`${square} + ${i}`}
                    bgColor={square}
                    setbgColor={setbgColor}
                  />
                ))}
              </div>

              <form onSubmit={changeHEXBackgroundColor}>
                <label htmlFor="Hxdecimal">
                  <span className="text-zinc-400">HEXADECIMAL</span>
                  <div className="w-full h-8 flex items-center mb-2 bg-zinc-700 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-1 focus-within:ring-offset-zinc-900">
                    <input
                      type="text"
                      id="Hxdecimal"
                      placeholder="#fb923c"
                      value={hex}
                      onChange={(e) => setHex(e.target.value)}
                      className="w-full pl-2 h-full bg-transparent text-slate-100 outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-zinc-800 hover:bg-zinc-800/70 p-1 flex items-center justify-center h-full outline-none focus:bg-zinc-800/50"
                    >
                      <Check size={25} className="text-zinc-100" />
                    </button>
                  </div>
                </label>
              </form>

              <div>
                <button
                  onClick={deleteLine}
                  className="w-full font-semibold bg-red-600 hover:bg-red-600/80 flex items-center justify-center mt-3 h-8 rounded-lg outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-zinc-900"
                >
                  Excluir linha
                </button>
              </div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

export function SquareColor({ bgColor, setbgColor }) {
  function changeBackgroundColor(color) {
    setbgColor(color);
  }

  return (
    <div
      onClick={() => changeBackgroundColor(bgColor)}
      tabIndex={0}
      className="border-2 border-zinc-400 w-4 h-4 cursor-pointer"
      style={{ background: `${bgColor}` }}
    />
  );
}
