import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "img-000",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/82219879251641.5cbdea653081e.jpg",
  },
  {
    id: "img-001",
    src: "https://i.pinimg.com/originals/7d/5b/0b/7d5b0b7cfb9cc9eab10ed12845987dd2.jpg",
  },
];

export const ListItemsSlice = createSlice({
  name: "ListItemsSlice",
  initialState,
  reducers: {
    Add_New_Item: (state, action) => {
      const { inputUrl } = action.payload;

      try {
        new URL(inputUrl);

        const newItem = {
          id: `img-${Math.random().toString()}`,
          src: inputUrl,
        };
        return [...state, newItem];
      } catch (error) {
        alert("URL inválida");
        return state;
      }
    },
    Remove_Item: (state, action) => {
      const { result, listItems } = action.payload;

      if (result.destination.droppableId !== result.source.droppableId) {
        const removeDraggImg = listItems.filter(
          (img) => img.id !== result.draggableId
        );
        return removeDraggImg;
      }
      return state;
    },
  },
});

export const { Add_New_Item, Remove_Item } =
  ListItemsSlice.actions;
export const ListItemsReducer = ListItemsSlice.reducer;
