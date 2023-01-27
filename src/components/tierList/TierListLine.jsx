import React, { useState } from "react";

import { PopoverEdit } from "./PopoverEdit";

export function TierListLine({bgColor}) {

  const [backgroundColor, setBackgroundColor] = useState(bgColor)

  return (
    <div className="wrappler">
      <div
        className="titleContainer"
        style={{ background: `${backgroundColor}` }}
        spellCheck="false"
      >
        Title
      </div>

      <div className="imgsContainer"></div>

      <PopoverEdit setbgColor={setBackgroundColor} />
    </div>
  );
}
