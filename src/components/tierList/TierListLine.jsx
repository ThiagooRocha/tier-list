import { useState } from "react";

//Drag and Drop
import { Droppable, Draggable } from "react-beautiful-dnd";

//Components
import { PopoverEdit } from "./PopoverEdit";

export function TierListLine({ id, bgColor, imgs }) {
  const [backgroundColor, setBackgroundColor] = useState(bgColor);

  return (
    <div className="wrappler">
      <div
        className="titleContainer"
        style={{ background: `${backgroundColor}` }}
        spellCheck="false"
      >
        Title
      </div>

      <Droppable droppableId={id} direction="horizontal">
        {(provided, snapshot) => (
          <div
            className="imgsContainer"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {imgs.map((img, index) => (
              <Draggable key={img.id} draggableId={img.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    className="inline-block w-20 h-20 md:w-32 md:h-32"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={{
                      backgroundImage: `url(${img.src})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      ...provided.draggableProps.style,
                    }}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <PopoverEdit id={id} setbgColor={setBackgroundColor} />
    </div>
  );
}
