import { configureStore } from '@reduxjs/toolkit'
import menuSlicer from "../slicer/menuSlicer";

export const store = configureStore({
  reducer: {
    menu: menuSlicer,
  },
})