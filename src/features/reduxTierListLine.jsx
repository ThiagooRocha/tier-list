import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "line-1",
    bgColor: "#ea580c",
    items: [{
      id: "img-0",
      src: "https://i.pinimg.com/736x/79/eb/67/79eb67153a759d71c9fa1dc65da901ab.jpg"
    },{
      id: "img-1",
      src: "https://i.pinimg.com/736x/79/eb/67/79eb67153a759d71c9fa1dc65da901ab.jpg"
    },
    {
      id: "img-rerererer1",
      src: "https://i.pinimg.com/736x/79/eb/67/79eb67153a759d71c9fa1dc65da901ab.jpg"
    },
    {
      id: "img-grswwg1",
      src: "https://i.pinimg.com/736x/79/eb/67/79eb67153a759d71c9fa1dc65da901ab.jpg"
    },
    {
      id: "img-1r43re",
      src: "https://i.pinimg.com/736x/79/eb/67/79eb67153a759d71c9fa1dc65da901ab.jpg"
    },
    {
      id: "img-1r43dddddre",
      src: "https://i.pinimg.com/736x/79/eb/67/79eb67153a759d71c9fa1dc65da901ab.jpg"
    },
  ],
  },
  {
    id: "line-2",
    bgColor: "#f97316",
    items: [
      {
        id: "img-23",
        src: "data:image/jpeg;base64,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",
      },
      {
        id: "img-1231",
        src: "https://cdn.ome.lt/Oecsq_4-nk1A0e5yVmgU6C-UmXI=/770x0/smart/uploads/conteudo/fotos/vagabond-47122.jpg",
      },
    ],
  },
  { id: "line-3", bgColor: "#fb923c", items: [] },
];

export const TierListLine = createSlice({
  name: "TierListLine",
  initialState,
  reducers: {
    New_Line: (state) => {
      const newLine = {
        id: `line-${Math.random().toString()}`,
        bgColor: "#ea580c",
        items: [],
      };
      return [...state, newLine];
    },
    Delete_Line: (state, action) => {
      return state.filter((line) => line.id !== action.payload.id);
    },
    Drag_Item: (state, action) => {
      const { result, tierListLines } = action.payload;

      let draggItem = {};

      let sourceItems = [];
      let destinationItems = [];
      let sourceIndex = 0;
      let destinationIndex = 0;

      tierListLines.filter((line, index) => {
        if (!result.destination) {
          return;
        } else if (line.id === result.source.droppableId) {
          sourceItems = line.items;
          sourceIndex = index;
        } else if (line.id === result.destination.droppableId) {
          destinationItems = line.items;
          destinationIndex = index;
        }
      });

      sourceItems.map((_, index) => {
        if (sourceItems[index].id == result.draggableId) {
          draggItem = sourceItems[index];
        }
      });

      const filteredImgs = sourceItems.filter(
        (img) => img.id !== result.draggableId
      );

      if (result.destination) {
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
          copyColumns[destinationIndex].items = destinationColumn;

          return copyColumns;
        }
      }
    },
  },
});

export const { New_Line, Delete_Line, Drag_Item } = TierListLine.actions;
export const TierListLineReducer = TierListLine.reducer;
