import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <>
      <Stack m={40} spacing={4}>
        <Typography variant="h3" component="div">
          Вас приветствует сервис управления командами!
        </Typography>
        <TextField
          id="login_email"
          label="Введите логин"
          multiline
          rows={1}
          defaultValue="Логин"
        />
        <TextField
          id="login_passowrd"
          label="Введите пароль"
          multiline
          rows={1}
          defaultValue="Пароль"
        />
        <Button onClick={handleLogin} variant="contained">
          Войти
        </Button>
      </Stack>
    </>
  );
}

export default App;
