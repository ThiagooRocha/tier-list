import { useState } from "react";
import { ModalAddImage } from "./ModalAddImage";

export function ListItems() {
  const [imgs, setImgs] = useState([]);

  return (
    <div className="bg-zinc-300 rounded-md w-full max-h-[320px] overflow-auto flex gap-2">
      <div className="w-36 p-3">
        <ModalAddImage imgs={imgs} setImgs={setImgs} />
      </div>

      <div className="w-full flex flex-wrap">
        {imgs &&
          imgs.map((img, i) => (
            <img
              key={img + i}
              className="w-[150px] h-[80px] md:h-40 object-contain"
              src={img}
            />
          ))}
      </div>
    </div>
  );
}
