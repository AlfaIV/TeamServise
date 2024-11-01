import React, { useState } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

import TaskStack from "../../components/taskStack/taskStack";
import TaskModal from "../../components/taskModal/taskModal";

const teams = [
  { id: 1, name: "Команда проекта: Солнышки" },
  { id: 2, name: "Команда проекта: Лунатики" },
  { id: 3, name: "Команда проекта: Звездочки" },
];

const Tasks = () => {
  const [tasks, setTasks] = useState({
    plan: [
      { name: 1, task: 123 },
      { name: 1, task: 123 },
      { name: 1, task: 123 },
    ],
    do: [
      { name: 2, task: 123 },
      { name: 2, task: 123 },
      { name: 2, task: 123 },
    ],
    check: [
      { name: 3, task: 123 },
      { name: 3, task: 123 },
      { name: 3, task: 123 },
    ],
    done: [
      { name: 4, task: 123 },
      { name: 4, task: 123 },
      { name: 4, task: 123 },
    ],
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Доска заданий
      </Typography>
      <Button
        onClick={() => setOpenModal(true)}
        variant="contained"
        color="primary"
        sx={{ margin: 2 }}
      >
        Добавить задание
      </Button>
      <Button variant="contained" color="primary" sx={{ margin: 2 }}>
        Удалить задание
      </Button>
      <TaskModal
        externalOpenModel={{ get: openModal, set: setOpenModal }}
        setTasks={setTasks}
      ></TaskModal>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <TaskStack tasks={tasks.plan} name={"Запланировано"}></TaskStack>
        </Grid>
        <Grid item lg={3}>
          <TaskStack tasks={tasks.do} name={"Выполняется"}></TaskStack>
        </Grid>
        <Grid item lg={3}>
          <TaskStack tasks={tasks.check} name={"Проверка"}></TaskStack>
        </Grid>
        <Grid item lg={3}>
          <TaskStack tasks={tasks.done} name={"Сделано"}></TaskStack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tasks;
