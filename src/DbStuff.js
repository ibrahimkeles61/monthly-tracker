// const day_1 = fetch("http://localhost:3004/week_1?day=1");
// console.log(day_1);

import React, { useState, useEffect } from "react";

function DbStuff() {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3004/week_1");
    const data = await res.json();

    console.log(
      `${data.day_1.sport.bicycle.quantity} ${
        data.day_1.sport.bicycle.type ? data.day_1.sport.bicycle.type : ""
      }`
    );

    return data;
  };
  fetchTasks();
  //   console.log(
  //     `${tasks.day_1.sport.bicycle.quantity} ${
  //       tasks.day_1.sport.bicycle.type ? tasks.day_1.sport.bicycle.type : ""
  //     }`
  //   );

  return <div></div>;
}

export default DbStuff;
