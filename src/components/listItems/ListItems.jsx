
//Components
import { ModalAddImage } from "./ModalAddImage";

//Drag and Drop
import { Droppable, Draggable } from "react-beautiful-dnd";

//Reducers
import { useSelector } from "react-redux";

export function ListItems() {

  const listItems = useSelector(state => state.listItems)

  return (
    <div className="bg-zinc-300 rounded-md w-full max-h-[320px] overflow-auto flex gap-2">
      <div className="w-36 p-3">
        <ModalAddImage />
      </div>

        <Droppable  droppableId={"listImgs"}>
          {(provided) => (
            <div
              className="w-full flex flex-wrap"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {listItems &&
                listItems.map((img, index) => (
                  <Draggable
                    key={img.id}
                    draggableId={img.id}
                    index={index}
                  >
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
    </div>
  );
}
