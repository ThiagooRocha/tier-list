import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { Check, DotsThreeOutline, X } from "phosphor-react";

//Reducers
import { useDispatch } from "react-redux";
import { Change_Title, Delete_Line } from "../../features/reduxTierListLine";

const squareColor = [
  "#404040",
  "#52525b",

  "#0f766e",
  "#0d9488",

  "#1e3a8a",
  "#1d4ed8",

  "#5b21b6",
  "#7c3aed",

  "#e11d48",
  "#be123c",

  "#b91c1c",
  "#dc2626",
];

export function PopoverEdit({ id, setbgColor }) {
  const [hex, setHex] = useState("");
  const [title, setTitle] = useState("Title");
  const dispatch = useDispatch();

  function changeHEXBackgroundColor(e) {
    e.preventDefault();

    if (hex !== "") {
      setbgColor(hex);
    }
  }

  function changeTitle(e) {
    e.preventDefault();
    if (title !== "") {
      dispatch(Change_Title({ id, title }));
    } else {
      setTitle(prev => prev)
    }
  }

  function deleteLine() {
    dispatch(Delete_Line({ id }));
  }

  return (
    <div className="absolute right-0 w-12 h-full p-1">
      <Popover.Root>
        <Popover.Trigger 
        className="bg-zinc-400 dark:bg-zinc-800 w-full flex items-center justify-center rounded-lg outline-none hover:ring-2 hover:ring-zinc-400 hover:ring-offset-1 hover:ring-offset-zinc-300 focus:ring-2 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-300 dark:hover:ring-zinc-800 dark:hover:ring-offset-zinc-700 dark:focus:ring-zinc-800 dark:focus:ring-offset-zinc-700">
          <DotsThreeOutline size={25} className="text-zinc-50" />
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content className="bg-zinc-200 dark:bg-zinc-600 w-56 rounded-lg p-3 mx-1">
            <Popover.Arrow className="fill-zinc-200 dark:fill-zinc-600" />

            <div className="flex flex-col justify-center">
              <div className="w-full rounded-md grid grid-cols-8 gap-2 bg-zinc-300 dark:bg-zinc-700 p-2 mt-5 mb-3">
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
                  <span className="text-zinc-500 dark:text-zinc-400">HEXADECIMAL</span>
                  <div className="w-full h-8 flex items-center mb-2 bg-zinc-300 dark:bg-zinc-700 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-zinc-500 focus-within:ring-offset-1 focus-within:ring-offset-zinc-900 dark:focus-within:ring-zinc-700 dark:focus-within:ring-offset-zinc-600">
                    <input
                    autoComplete="off"
                      type="text"
                      id="Hxdecimal"
                      placeholder="#fb923c"
                      value={hex}
                      onChange={(e) => setHex(e.target.value)}
                      className="w-full pl-2 h-full bg-transparent text-zinc-800 outline-none dark:text-zinc-200"
                    />
                    <button
                      type="submit"
                      className="bg-zinc-300 hover:bg-zinc-400/70 dark:bg-zinc-700 dark:hover:bg-zinc-500/70 p-1 flex items-center justify-center h-full outline-none focus:bg-zinc-400/70 dark:focus:bg-zinc-500/70"
                    >
                      <Check size={25} className="text-zinc-800 dark:text-zinc-400" />
                    </button>
                  </div>
                </label>
              </form>

              <form onSubmit={changeTitle}>
                <label>
                  <span className="text-zinc-500 dark:text-zinc-400">Título</span>
                  <div className="w-full h-8 flex items-center mb-2 bg-zinc-300 dark:bg-zinc-700 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-zinc-500 focus-within:ring-offset-1 focus-within:ring-offset-zinc-900 dark:focus-within:ring-zinc-700 dark:focus-within:ring-offset-zinc-600">
                    <input
                      className="w-full pl-2 h-full bg-transparent text-zinc-800 dark:text-zinc-200 outline-none"
                      type="text"
                      placeholder="Título"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className="bg-zinc-300 hover:bg-zinc-400/70 dark:bg-zinc-700 dark:hover:bg-zinc-500/70 p-1 flex items-center justify-center h-full outline-none focus:bg-zinc-400/70 dark:focus:bg-zinc-500/70">
                      <Check size={25} className="text-zinc-800 dark:text-zinc-400" />
                    </button>
                  </div>
                </label>
              </form>

              <div>
                <button
                  onClick={deleteLine}
                  className="w-full h-10 text-zinc-100 font-semibold bg-red-600 hover:bg-red-600/80 flex items-center justify-center mt-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-zinc-900"
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
      className="border-2 border-zinc-400 rounded-full w-5 h-5 cursor-pointer"
      style={{ background: `${bgColor}` }}
    />
  );
}
