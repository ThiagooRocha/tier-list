import { useState } from "react";

//Components
import { ListItems } from "./components/listItems/ListItems";
import { TierList } from "./components/tierList/TierList";

//Drag and Drop
import { DragDropContext } from "react-beautiful-dnd";

//Reducres
import { useSelector, useDispatch } from "react-redux";
import { Drag_Item_In_Column, Drag_Item_To_Column } from "./features/reduxTierListLine";
import { Remove_Item } from "./features/reduxListItems";

export function App() {
  const tierListLines = useSelector((state) => state.tierListLine);
  const listItems = useSelector((state) => state.listItems);
  const dispatch = useDispatch();

  function onDragEnd(result) {
    if (result.source.droppableId === "listImgs") {
      dispatch(Drag_Item_To_Column( {result, tierListLines, listItems} ))
      dispatch(Remove_Item({result, listItems}))
    } else {
      dispatch(Drag_Item_In_Column({ result, tierListLines }));
    }
  }

  return (
    <div className="max-w-[1500px] w-[80%] mx-auto flex flex-col  gap-10 mb-20">
      <DragDropContext onDragEnd={onDragEnd}>
        <TierList />
        <ListItems />
      </DragDropContext>
    </div>
  );
}
