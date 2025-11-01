import { useState } from "react";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CommandCard = ({name, description, imgSrc}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 300}}>
          <CardActionArea
            id="card__button"
            data-testid="commandCard-CardActionArea"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <CardMedia
              component="img"
              height="250"
              image="https://gagaru.club/uploads/posts/2023-06/thumbs/1685605786_gagaru-club-p-rabota-risunok-vkontakte-9.png"
              alt="user"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Menu
          sx={{ maxWidth: 300 }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "card__button",
          }}
        >
          <MenuItem onClick={handleClose}>Участники</MenuItem>
          <MenuItem onClick={handleClose}>Описание задачи</MenuItem>
          <MenuItem onClick={handleClose}>Прогресс</MenuItem>
        </Menu>
      </Container>
    </>
  );
};

export default CommandCard;
