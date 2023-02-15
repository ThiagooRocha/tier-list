import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "line-1", bgColor: "#1d4ed8", title: "Title", items: [] },
  { id: "line-2", bgColor: "#2563eb", title: "Title", items: [] },
  { id: "line-3", bgColor: "#1e3a8a", title: "Title", items: [] },
];

export const TierListLineSlice = createSlice({
  name: "TierListLine",
  initialState,
  reducers: {
    New_Line: (state) => {
      const newLine = {
        id: `line-${Math.random().toString()}`,
        bgColor: "#52525b",
        title: "Title",
        items: [],
      };
      return [...state, newLine];
    },
    Change_Title: (state, action) => {
      const { id, title } = action.payload;

      state.map((line) => {
        if (line.id === id) {
          line.title = title;
        }
      });

      return state;
    },
    Delete_Line: (state, action) => {
      return state.filter((line) => line.id !== action.payload.id);
    },
    Drag_Item_In_Column: (state, action) => {
      const { result, tierListLines } = action.payload;

      let draggItem = {};

      let sourceColumnItems = [];
      let destinationItems = [];
      let sourceIndex = 0;
      let destinationColumnIndex = 0;

      if (
        !result.destination ||
        result.destination.droppableId === "listImgs"
      ) {
        return;
      }

      tierListLines.filter((line, index) => {
        if (line.id === result.source.droppableId) {
          sourceColumnItems = line.items;
          sourceIndex = index;
        } else if (line.id === result.destination.droppableId) {
          destinationItems = line.items;
          destinationColumnIndex = index;
        }
      });

      sourceColumnItems.map((_, index) => {
        if (sourceColumnItems[index].id == result.draggableId) {
          draggItem = sourceColumnItems[index];
        }
      });

      const filteredImgs = sourceColumnItems.filter(
        (img) => img.id !== result.draggableId
      );

      if (result.destination.droppableId === result.source.droppableId) {
        filteredImgs.splice(result.destination.index, 0, draggItem);

        const copyColumns = JSON.parse(JSON.stringify(tierListLines));

        copyColumns[sourceIndex].items = filteredImgs;
        return copyColumns;
      } else {
        const destinationColumn = Array.from(destinationItems);
        destinationColumn.splice(result.destination.index, 0, draggItem);

        const copyColumns = JSON.parse(JSON.stringify(tierListLines));

        copyColumns[sourceIndex].items = filteredImgs;
        copyColumns[destinationColumnIndex].items = destinationColumn;

        return copyColumns;
      }
    },
    Drag_Item_To_Column: (state, action) => {
      let { result, tierListLines, listItems } = action.payload;

      let destinationItems = [];
      let destinationColumnIndex = 0;
      let draggItem = {};

      if (!result.destination) {
        return;
      }

      tierListLines.filter((line, index) => {
        if (result.destination.droppableId == line.id) {
          destinationItems = line.items;
          destinationColumnIndex = index;
        }
      });

      if (result.destination.droppableId !== result.source.droppableId) {
        listItems.map((item) => {
          if (item.id == result.draggableId) {
            draggItem = item;
          }
        });

        const destinationColumn = Array.from(destinationItems);
        destinationColumn.splice(result.destination.index, 0, draggItem);

        const copyColumns = JSON.parse(JSON.stringify(tierListLines));

        copyColumns[destinationColumnIndex].items = destinationColumn;
        return copyColumns;
      }
    },
  },
});

export const {
  New_Line,
  Change_Title,
  Delete_Line,
  Drag_Item_In_Column,
  Drag_Item_To_Column,
} = TierListLineSlice.actions;
export const TierListLineReducer = TierListLineSlice.reducer;
