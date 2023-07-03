import { createSlice } from "@reduxjs/toolkit";
import tatranImg from "../../images/cards/tatran.jpg";
import viloraImg from "../../images/cards/vilora.jpg";
import menuImg from "../../images/cards/menu.jpg";
import askestaImg from "../../images/cards/askesta.jpg";
import lunarImg from "../../images/cards/lunar.jpg";
import nastanImg from "../../images/cards/nastan.jpg";
import { ICard } from "../../entries/Card";

interface dataState {
  data: ICard[];
  cartData: ICard[];
}

const initialState: dataState = {
  data: [
    {
      id: 1,
      name: "TATRAN",
      type: "Кровать",
      description:
        "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
      price: 120000,
      img: tatranImg,
      addedDate: "24.01.2019",
    },
    {
      id: 2,
      name: "VILORA",
      type: "Кресло",
      description:
        "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
      price: 21000,
      img: viloraImg,
      addedDate: "14.02.2020",
    },
    {
      id: 3,
      name: "MENU",
      type: "Стол",
      description:
        "Европейский дуб - отличается особой прочностью и стабильностью.",
      price: 34000,
      img: menuImg,
      addedDate: "23.02.2020",
    },
    {
      id: 4,
      name: "ASKESTA",
      type: "Диван",
      description:
        "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
      price: 68000,
      img: askestaImg,
      addedDate: "17.05.2021",
    },
    {
      id: 5,
      name: "LUNAR",
      type: "Кресло",
      description:
        "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
      price: 40000,
      img: lunarImg,
      addedDate: "05.12.2012",
    },
    {
      id: 6,
      name: "Nastan",
      type: "Шкаф",
      description:
        "Мебель может быть оснащена разнообразными системами подсветки.",
      price: 80000,
      img: nastanImg,
      addedDate: "31.01.2022",
    },
  ],
  cartData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setCartData(state, action) {
      state.cartData = action.payload;
    },
  },
});

// Селекторы в редаксе - обычные функции чтоб не дублировать код, а импортировать функцию
export const selectData = (state: { dataReducer: dataState }) =>
  state.dataReducer;

export const { setData, setCartData } = dataSlice.actions;

export default dataSlice.reducer;
