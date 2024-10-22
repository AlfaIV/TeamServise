import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Страница не найдена
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Извините, но запрашиваемая вами страница не существует.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/home")}>
        Вернуться на главную
      </Button>
    </Box>
  );
};
export default Error;
