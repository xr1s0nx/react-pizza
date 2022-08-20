import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navBtns: [
    { id: 0, text: "Все", active: true },
    { id: 1, text: "Мясные", active: false },
    { id: 2, text: "Вегетарианские", active: false },
    { id: 3, text: "Гриль", active: false },
    { id: 4, text: "Острые", active: false },
    { id: 5, text: "Закрытые", active: false },
  ],
  nowActiveFilter: 0,
  categorieName: "Все",
  popUpVsible: false,
  sortBtns: [
    { id: 0, name: "популярности" },
    { id: 1, name: "цене" },
    { id: 2, name: "алфавиту" },
  ],
  nowActiveSort: 0,
  ascStatus: true,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeActive: (state, action) => {
      state.navBtns = state.navBtns.map((item) => {
        if (action.payload === item.id) {
          item.active = true;
          state.nowActiveFilter = item.id;
          state.categorieName = item.text;
        } else {
          item.active = false;
        }
        return item;
      });
    },
    togglePopUpVisibility: (state) => {
      state.popUpVsible = !state.popUpVsible;
    },
    changeSort: (state, action) => {
      state.nowActiveSort = action.payload;
      state.popUpVsible = false;
    },
    toggleAsc: (state) => {
      state.ascStatus = !state.ascStatus;
    },
    changeSearchVal: (state, action) => {
      state.searchValue = action.payload;
    },
    closeSortPopUp: (state, action) => {
      state.popUpVsible = action.payload;
    },
  },
});

export const {
  changeActive,
  togglePopUpVisibility,
  changeSort,
  toggleAsc,
  changeSearchVal,
  closeSortPopUp,
} = filterSlice.actions;

export default filterSlice.reducer;
