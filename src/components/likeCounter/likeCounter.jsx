import React, { useState } from 'react';
import { IconButton, Typography, Box, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LikeCounter = ({ initalLikeNumber = 0}) => {
  const [likeCount, setLikeCount] = useState(initalLikeNumber);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        padding: 2,
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        maxWidth: 200
      }}
    >
      <IconButton 
        onClick={handleLike}
        color={isLiked ? 'error' : 'default'}
        aria-label="like"
      >
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      
      <Typography variant="h6" component="span">
        {likeCount}
      </Typography>
      
      <Typography variant="body2" color="text.secondary">
        лайков
      </Typography>
    </Box>
  );
};

export default LikeCounter;