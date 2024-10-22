import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GroupIcon from "@mui/icons-material/Group";
import TaskIcon from "@mui/icons-material/Task";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState("");

  function handleChange(newValue) {
    setValue(newValue);
    // navigate(`${location.pathname}/${newValue}`);
    navigate(`/home/${newValue}`);
  }

  return (
    <>
      <BottomNavigation
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
        }}
        value={value}
        showLabels
      >
        <BottomNavigationAction
          label="Профиль"
          value="userProfile"
          onClick={() => handleChange("userProfile")}
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label="Сотрудники"
          value="staff"
          onClick={() => handleChange("staff")}
          icon={<EmojiPeopleIcon />}
        />
        <BottomNavigationAction
          label="Команды"
          value="teams"
          onClick={() => handleChange("teams")}
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          label="Задачи"
          value="tasks"
          onClick={() => handleChange("tasks")}
          icon={<TaskIcon />}
        />
      </BottomNavigation>
      <Outlet />
    </>
  );
};

export default Home;
