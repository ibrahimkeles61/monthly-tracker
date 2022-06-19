import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      subject_id: 1,
      task_name: "Bisiklet",
      subject_name: "Spor",
      dailyValues: [
        5, 1, 5, 2, 5, 8, 5, 15, 5, 2, 5, 6, 5, 5, 7, 5, 5, 0, 5, 5, 0, 5, 5,
        10, 10, 5, 3, 0, 5,
      ],
      type: "dk",
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 2,
      subject_id: 1,
      task_name: "Şınav",
      subject_name: "Spor",
      dailyValues: [6, 0, 0, 6, 0, 0, 6, 0, 0, 0, 6, 6, 6, 0, 0, 6, 0, 6],
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 3,
      subject_id: 1,
      task_name: "Barfix",
      subject_name: "Spor",
      dailyValues: [1, 0, 0],
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 4,
      subject_id: 1,
      task_name: "Bükbük",
      subject_name: "Spor",
      dailyValues: [12, 0, 0, 12, 0, 0, 12, 0, 0, 0],
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 5,
      subject_id: 2,
      task_name: "Kitap",
      subject_name: "Kişisel",
      dailyValues: [10, 0, 0, 0, 10, 0, 0, 0, 0, 10],
      type: "sayfa",
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 6,
      subject_id: 2,
      task_name: "Vakâ",
      subject_name: "Kişisel",
      dailyValues: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 7,
      subject_id: 3,
      task_name: "Oxford",
      subject_name: "İngilizce",
      dailyValues: [2, 2, 2, 2, 0, 0, 2, 2, 0, 0],
      type: "sayfa",
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 8,
      subject_id: 3,
      task_name: "İng. Kelime",
      subject_name: "İngilizce",
      type: "sayfa",
      dailyValues: [25, 25, 25, 25, 0, 0, 25, 25, 0, 25],
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 9,
      subject_id: 3,
      task_name: "Duolingo",
      subject_name: "İngilizce",
      dailyValues: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
      type: "dk",
      lastDay: "27-0-2022",
      isPageOn: false,
    },
    {
      id: 10,
      subject_id: 3,
      task_name: "İng. Kitap",
      subject_name: "İngilizce",
      dailyValues: [0, 1],
      type: "sayfa",
      lastDay: "27-0-2022",
      isPageOn: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addOneToLastOne: (state, { payload }) => {
      state.tasks.map((task) => {
        if (task.id === payload) {
          task.dailyValues[task.dailyValues.length - 1] =
            task.dailyValues[task.dailyValues.length - 1] + 1;
        }
      });
    },
    addFiveToLastOne: (state, { payload }) => {
      state.tasks.map((task) => {
        if (task.id === payload) {
          task.dailyValues[task.dailyValues.length - 1] =
            task.dailyValues[task.dailyValues.length - 1] + 5;
        }
      });
    },
    addTenToLastOne: (state, { payload }) => {
      state.tasks.map((task) => {
        if (task.id === payload) {
          task.dailyValues[task.dailyValues.length - 1] =
            task.dailyValues[task.dailyValues.length - 1] + 10;
        }
      });
    },
    reduceOneLastOne: (state, { payload }) => {
      state.tasks.map((task) => {
        if (
          task.id === payload &&
          task.dailyValues[task.dailyValues.length - 1] >= 1
        ) {
          task.dailyValues[task.dailyValues.length - 1] =
            task.dailyValues[task.dailyValues.length - 1] - 1;
        }
      });
    },
    reduceFiveLastOne: (state, { payload }) => {
      state.tasks.map((task) => {
        if (
          task.id === payload &&
          task.dailyValues[task.dailyValues.length - 1] >= 5
        ) {
          task.dailyValues[task.dailyValues.length - 1] =
            task.dailyValues[task.dailyValues.length - 1] - 5;
        }
      });
    },
    reduceTenLastOne: (state, { payload }) => {
      state.tasks.map((task) => {
        if (
          task.id === payload &&
          task.dailyValues[task.dailyValues.length - 1] >= 10
        ) {
          task.dailyValues[task.dailyValues.length - 1] =
            task.dailyValues[task.dailyValues.length - 1] - 10;
        }
      });
    },
    addNewOne: (state, { payload }) => {
      state.tasks.map((task) => {
        if (task.id === payload) {
          task.dailyValues.push(0);
        }
      });
    },
    updateDate: (state, { payload }) => {
      const date = new Date();
      state.tasks.map((task) => {
        if (task.id === payload) {
          task.lastDay = `${date.getUTCDate()}-${date.getUTCMonth()}-${date.getUTCFullYear()}`;
        }
      });
    },
    closeTaskPage: (state) => {
      state.tasks.map((task) => {
        task.isPageOn = false;
      });
    },
    openTaskPage: (state, { payload }) => {
      state.tasks.map((task) => {
        if (task.id === payload) task.isPageOn = true;
      });
    },
  },
});

export const {
  addOneToLastOne,
  addFiveToLastOne,
  addTenToLastOne,
  reduceOneLastOne,
  reduceFiveLastOne,
  reduceTenLastOne,
  addNewOne,
  updateDate,
  closeTaskPage,
  openTaskPage,
} = taskSlice.actions;

export default taskSlice.reducer;
