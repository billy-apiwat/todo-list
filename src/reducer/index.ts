import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface listData {
  id: number;
  todo: string;
  userId: number;
  completed: boolean;
}

interface DataState {
  list: listData[];
}

const initialState: DataState = {
  list: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<listData[]>) => {
      state.list = action.payload;
    },
    addList: (state, action: PayloadAction<string>) => {
      const lastId = state.list.length > 0 ? Math.max(...state.list.map((item) => item.id)) : 0;
      const newList = {
        id: lastId + 1,
        todo: action.payload,
        completed: false,
        userId: 0,
      };
      state.list.push(newList);
    },
    toggleCheckTodo: (state, action: PayloadAction<{ id: number; checked: boolean }>) => {
      const { id, checked } = action.payload;
      const target = state.list.find((item) => item.id === id);
      if (target) {
        target.completed = checked;
      }
    },
    deleteList: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setList, addList, toggleCheckTodo, deleteList } = dataSlice.actions;
export default dataSlice.reducer;
