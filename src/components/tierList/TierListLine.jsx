import { useState } from "react";

//Drag and Drop
import { Droppable, Draggable } from "react-beautiful-dnd";

//Components
import { PopoverEdit } from "./PopoverEdit";

export function TierListLine({ id, bgColor, title, imgs }) {
  const [backgroundColor, setBackgroundColor] = useState(bgColor);

  const screen = window.matchMedia("(max-width: 639px)").matches;

  return (
    <div className="wrappler">
      <div
        className="titleContainer"
        style={{ background: `${backgroundColor}` }}
        spellCheck="false"
      >
        <h2>{title}</h2>
      </div>
      {screen ? (
        <Droppable droppableId={id} direction="vertical">
          {(provided) => (
            <div
              className="imgsContainer"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {imgs.map((img, index) => (
                <Draggable key={img.id} draggableId={img.id} index={index}>
                  {(provided) => (
                    <div
                      className="flex-shrink-0 w-full h-40 sm:w-32 sm:h-32"
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
      ) : (
        <Droppable droppableId={id} direction="horizontal">
          {(provided) => (
            <div
              className="imgsContainer"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {imgs.map((img, index) => (
                <Draggable key={img.id} draggableId={img.id} index={index}>
                  {(provided) => (
                    <div
                      className="flex-shrink-0 w-full h-40 sm:w-32 sm:h-32"
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
      )}

      <PopoverEdit id={id} setbgColor={setBackgroundColor} />
    </div>
  );
}
