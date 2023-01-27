import React, { useState } from "react";

export function FormAddItem({ imgs, setImgs }) {
  const [inputUrl, setInputUrl] = useState("");
  const [inputFile, setInputFile] = useState();

  function convertFileToImage(e) {
    
    
  }

  function convertUrl() {
    if (inputUrl !== "") {
      try {
        new URL(inputUrl);
        setInputImgs((prev) => [...prev, inputUrl])
        setImgs((prev) => [...prev, inputUrl])
      } catch (error) {
        alert("URL inválida");
      }
      setInputUrl("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    convertUrl();

    if (inputFile) {
      convertFileToImage();
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="url" className="text-slate-300">Url</label>
        <input
          className="w-full bg-zinc-700 rounded-md h-10 p-4 text-slate-100 outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-zinc-800"
          type="text"
          autoComplete="off"
          id="url"
          placeholder="https://image..."
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="file" className="text-slate-300">File</label>
        <div>
          <input
            type="file"
            id="file"
            className="w-full bg-zinc-700 rounded-md h-10 text-slate-100 flex items-center justify-center outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-zinc-800"
            accept="image/*"
            onChange={convertFileToImage}
          />
        </div>

        
      </div>

      <button
        type="submit"
        className="bg-orange-600 mt-4 leading-tight font-semibold text-lg text-slate-100 h-12 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 focus:ring-offset-zinc-800"
      >
        Salvar
      </button>
    </form>
  );
}
