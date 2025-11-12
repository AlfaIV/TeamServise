import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Tooltip, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import LikeCounter from "../../components/likeCounter/likeCounter";

const User = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h3" gutterBottom margin={"normal"}>
          Cтраница профиля сотрудника
        </Typography>
        <Grid container spacing={10} display="flex" alignItems="center" justifyContent="center" >
          <Grid item xs={12} md={3} >
            <Box
              component="img"
              src="https://api.multiavatar.com/backrend.svg" // Замените на URL вашего изображения
              alt="Profile"
              sx={{
                width: "100px",
                borderRadius: "8px",
                boxShadow: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              fullWidth
              margin="normal"
              variant="h6"
              gutterBottom
            >
              Иван
            </Typography>
            <Typography
              fullWidth
              margin="normal"
              variant="h6"
              gutterBottom
            >
              Иванов
            </Typography>
            <Typography
              fullWidth
              margin="normal"
              variant="h6"
              gutterBottom
            >
              Backend-разработчик
            </Typography>
            <Typography
              fullWidth
              margin="normal"
              variant="h6"
              gutterBottom
            >
              Проект: "Сервис управления командами"
            </Typography>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <LikeCounter initalLikeNumber={0}/>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Общая информация
          </Typography>
          <Typography variant="body1">
            12 лет опыта в разработке, в том числе 7 лет на позиции
            backend-разработчика. Являюсь экспертом в разработке на языке
            программирования Java, имею опыт работы с фреймворками Spring и
            Hibernate. Также знаком с технологиями Java EE, RESTful API,
            WebSockets, Apache Kafka, Apache Cassandra.
          </Typography>
        </Box>
      </Container>
      );
    </>
  );
};

export default User;
