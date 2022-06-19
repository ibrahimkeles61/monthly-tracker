import { configureStore } from "@reduxjs/toolkit";
import tasks from "./taskSlice";
import menu from "./menuSlice";
import user from "./userSlice";

export default configureStore({
  reducer: {
    tasks,
    menu,
    user,
  },
});
