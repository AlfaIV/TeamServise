import {
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";

const TaskStack = ({ name, tasks }) => {
  return (
    <Paper sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h6">{name}</Typography>
      {tasks.length === 0 ? (
        <Typography variant="body1">Нет запланированных заданий</Typography>
      ) : (
        tasks.map((task, index) => (
          <Card sx={{ minWidth: 275, margin: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {task.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.task}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Редактировать</Button>
              <Button size="small">Удалить</Button>
            </CardActions>
          </Card>
        ))
      )}
    </Paper>
  );
};

export default TaskStack;
