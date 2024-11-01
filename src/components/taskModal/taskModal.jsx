import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const TaskModal = ({externalOpenModel, setTasks}) => {
  const [openModal, setOpenModal] = useState(false);
  const [state, setState] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");


  const addTaskToDone = (newTask) => {
    setTasks((prevState) => ({
      ...prevState,
      done: [...prevState.done, newTask],
    }));
  };

  useEffect(() => {
    if (externalOpenModel.get) {
      setOpenModal(true);
    }
  }, [externalOpenModel]);

  const handleAddTask = () => {
    switch (state) {
      case "plan":
        setTasks((prevState) => ({
          ...prevState,
          plan: [...prevState.plan, {name: taskName, task: taskDescription}],
        }));
        break;
      case "do":
        setTasks((prevState) => ({
          ...prevState,
          do: [...prevState.do, {name: taskName, task: taskDescription}],
        }));
        break;
      case "check":
        setTasks((prevState) => ({
          ...prevState,
          check: [...prevState.check, {name: taskName, task: taskDescription}],
        }));
        break;
      case "done":
        setTasks((prevState) => ({
          ...prevState,
          done: [...prevState.done, {name: taskName, task: taskDescription}],
        }));
        addTaskToDone({name: taskName, task: taskDescription});
        break;
      default:
        break;
    }
    setTaskName("");
    setTaskDescription("");
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    externalOpenModel.set(false);
  };

  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogTitle>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ marginBottom: 2 }}
        >
          Опишите новое задание
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Select
          value={state}
          label="Статус задания"
          sx={{ width: 200 }}
          onChange={(event) => {
            setState(event.target.value);
          }}
        >
          <MenuItem value={"plan"}>Запланировано</MenuItem>
          <MenuItem value={"do"}>Выполняется</MenuItem>
          <MenuItem value={"check"}>Проверка</MenuItem>
          <MenuItem value={"done"}>Сделано</MenuItem>
        </Select>
        <TextField
          fullWidth
          margin="normal"
          label="Название задания"
          variant="outlined"
          value={taskName}
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Описание задания"
          variant="outlined"
          multiline
          rows={4}
          value={taskDescription}
          onChange={(event) => {
            setTaskDescription(event.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddTask} color="primary" variant="contained">
          Создать задание
        </Button>
        <Button onClick={handleCloseModal} color="primary" variant="contained">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;
