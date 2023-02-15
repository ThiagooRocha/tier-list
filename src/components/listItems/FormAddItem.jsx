import React, { useState } from "react";

//Reducers
import { useSelector, useDispatch } from "react-redux";
import { Add_New_Item } from "../../features/reduxListItems"

export function FormAddItem() {
  const listItems = useSelector(state => state.listItems)
  const dispatch = useDispatch()
  const [inputUrl, setInputUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(inputUrl !== ""){
      dispatch(Add_New_Item({inputUrl}))
      setInputUrl("");
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

      <div className="flex flex-col">
        <label htmlFor="url" className="text-zinc-300">
          Url
        </label>
        <input
          className="w-full bg-zinc-400 rounded-md h-10 p-4 text-zinc-800 placeholder:text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:placeholder-zinc-400 outline-none hover:ring-2 hover:ring-zinc-400 hover:ring-offset-1 hover:ring-offset-zinc-300 focus:ring-2 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-300 dark:focus:ring-zinc-800 dark:focus:ring-offset-zinc-700 dark:hover:ring-zinc-800 dark:hover:ring-offset-zinc-700"
          type="text"
          autoComplete="off"
          id="url"
          placeholder="https://image..."
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 mt-4 leading-tight font-semibold text-lg text-zinc-100 h-12 rounded-lg outline-none hover:ring-2 hover:ring-green-400 hover:ring-offset-1 hover:ring-offset-zinc-400 focus:ring-2 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-zinc-300 dark:hover:ring-offset-zinc-700 dark:focus:ring-offset-zinc-700"
      >
        Salvar
      </button>
    </form>
  );
}
