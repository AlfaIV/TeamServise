import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';

const Home = () => {
    const [value, setValue] = useState('teams');
    return (
      <BottomNavigation
        sx={{ display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '10vh',
         }}
        value={value}
        showLabels
    >

        <BottomNavigationAction
          label="Профиль"
          value="userProfile"
          onClick={() => setValue('userProfile')}
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label="Сотрудники"
          value="staff"
          onClick={() => setValue('staff')}
          icon={<EmojiPeopleIcon />}
        />
        <BottomNavigationAction
          label="Команды"
          value="teams"
          icon={<GroupIcon />}
          onClick={() => setValue('teams')}
        />
        <BottomNavigationAction
          label="Задачи"
          value="tasks"
          icon={<TaskIcon />}
          onClick={() => setValue('tasks')}
        />
      </BottomNavigation>
    );
}

export default Home;