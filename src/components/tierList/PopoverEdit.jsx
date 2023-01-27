import * as Popover from "@radix-ui/react-popover";

import { Check, DotsThreeOutline, X } from "phosphor-react";
import { useState } from "react";

export function PopoverEdit({ setbgColor }) {
  const [squareColor, setSquareColor] = useState([
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
  ]);

  return (
    <div className="min-h-[160px] w-12 relative p-1">
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
                  <SquareColor key={`${square} + ${i}`} bgColor={square} setbgColor={setbgColor}/>
                ))}
              </div>

              <div>
                <label htmlFor="Hxdecimal" className="text-zinc-400">
                  HXDECIMAL
                </label>
                <input
                  type="text"
                  id="Hxdecimal"
                  placeholder="#fb923c"
                  className="w-full pl-2 bg-zinc-700 rounded-md h-8 text-slate-100 flex items-center justify-center outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-zinc-900 mb-2"
                />
              </div>

              <button className="bg-orange-600 flex items-center justify-center mt-3 h-8 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-zinc-900">
                <Check size={25} className="text-zinc-100" />
              </button>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

export function SquareColor({ bgColor, setbgColor }) {

  function changeBackgroundColor(color) {
    setbgColor(color)
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
