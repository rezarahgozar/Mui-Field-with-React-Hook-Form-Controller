import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const StarButton = (props) => {
    const{active,onClick} = props;
  return (
    <button onClick={onClick}>
        {active?<StarIcon color="secondary" />:<StarBorderIcon />}
    </button>
  )
}
