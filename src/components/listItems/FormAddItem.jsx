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
        <label htmlFor="url" className="text-zinc-300">Url</label>
        <input
          className="w-full bg-zinc-400 rounded-md h-10 p-4 text-zinc-800 placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-300"
          type="text"
          autoComplete="off"
          id="url"
          placeholder="https://image..."
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="file" className="text-zinc-300">File</label>
        <div>
          <input
            type="file"
            id="file"
            className="w-full bg-zinc-400 rounded-md h-10 text-zinc-700 flex items-center justify-center placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-300"
            accept="image/*"
            onChange={convertFileToImage}
          />
        </div>

        
      </div>

      <button
        type="submit"
        className="bg-green-500 mt-4 leading-tight font-semibold text-lg text-zinc-100 h-12 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-zinc-300"
      >
        Salvar
      </button>
    </form>
  );
}
