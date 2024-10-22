import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const teams = [
  { id: 1, name: "Команда проекта: Солнышки" },
  { id: 2, name: "Команда проекта: Лунатики" },
  { id: 3, name: "Команда проекта: Звездочки" },
];

const Tasks = () => {
  const [task, setTask] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task && selectedTeam) {
      setTasks([...tasks, { task, team: selectedTeam }]);
      setTask("");
      setSelectedTeam("");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Доска заданий
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={{padding: "16px" }}>
            <Typography variant="h6">Создать задание</Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel id="team-select-label">Выберите команду</InputLabel>
              <Select
                labelId="team-select-label"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                {teams.map((team) => (
                  <MenuItem key={team.id} value={team.name}>
                    {team.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel height="40px" htmlFor="task-input">Задание</InputLabel>
              <input
                id="task-input"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </FormControl>
            <Button height="40px" variant="contained" color="primary" onClick={handleAddTask}>
              Создать задание
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: "16px" }}>
            <Typography variant="h6">Список заданий</Typography>
            {tasks.length === 0 ? (
              <Typography variant="body1">Нет заданий</Typography>
            ) : (
              tasks.map((task, index) => (
                <Paper key={index} style={{ padding: "8px", margin: "8px 0" }}>
                  <Typography variant="body1">
                    {task.task} - {task.team}
                  </Typography>
                </Paper>
              ))
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tasks;
