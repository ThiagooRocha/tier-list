import { useState } from "react";
import { ModalAddImage } from "./ModalAddImage";

export function ListItems() {
  const [imgs, setImgs] = useState([]);

  console.log(imgs)

  return (
    <div className="bg-zinc-800 rounded-md max-w-[1500px] w-[80%] max-h-[320px] overflow-auto flex gap-2">
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
