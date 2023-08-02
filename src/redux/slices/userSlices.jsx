import { createSlice } from "@reduxjs/toolkit";
import { getDataLocal } from "../../utils/localStore";

const initialState = {
  name: getDataLocal("user"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataName: (state, action) => {
      if (state.name == null) {
        state.name = action.payload;
      }
    },
  },
});
export const { setDataName } = userSlice.actions;

export default userSlice.reducer;
