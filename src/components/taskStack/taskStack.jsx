import { Paper, Typography } from "@mui/material";

const TaskStack = ({ name, tasks }) => {
  return (
    <Paper sx={{ height: 200, padding: 2, margin: 2 }}>
      <Typography variant="h6">{name}</Typography>
      {tasks.length === 0 ? (
        <Typography variant="body1">Нет запланированных заданий</Typography>
      ) : (
        tasks.map((task, index) => (
          <Paper key={index} style={{ padding: "8px", margin: "8px 0" }}>
            <Typography variant="body1">
              {task.name}
              {task.task}
            </Typography>
          </Paper>
        ))
      )}
    </Paper>
  );
};

export default TaskStack;
