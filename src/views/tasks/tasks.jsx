import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import axios from "axios";
import { useQuery } from "react-query";

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
    plan: [],
    do: [],
    check: [],
    done: [],
  });

  const [openModal, setOpenModal] = useState(false);

  async function getTask() {
    try {
      const response = await axios.get("http://10.4.56.94:3000/task");
      console.log("Данные по задачам:", response.data);
      response.data.forEach((task) => {
        switch (task.status) {
          case "To Do":
            setTasks((prevState) => ({
              ...prevState,
              plan: [
                ...prevState.plan,
                { name: task.title, task: task.description },
              ],
            }));
            break;
          case "In Progress":
            setTasks((prevState) => ({
              ...prevState,
              do: [
                ...prevState.do,
                { name: task.title, task: task.description },
              ],
            }));
            break;
          case "Interview":
            setTasks((prevState) => ({
              ...prevState,
              check: [
                ...prevState.check,
                { name: task.title, task: task.description },
              ],
            }));
            break;
          case "Completed":
            setTasks((prevState) => ({
              ...prevState,
              done: [
                ...prevState.done,
                { name: task.title, task: task.description },
              ],
            }));
            break;
          default:
            break;
        }
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении данных задач:", error);
    }
  }

  const { data, isLoading, isError } = useQuery("task", getTask);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

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
      <Select sx={{ width: 200, margin: 2 }} label="Выбрать команду">
        <MenuItem value={10}>Первая команда</MenuItem>
        <MenuItem value={20}>Вторая команда</MenuItem>
        <MenuItem value={30}>Третья команда</MenuItem>
      </Select>
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
