import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import neha from '../../resources/images/neha5.jpg'
import { Avatar } from '@mui/material';

export default function ImgMediaCard() {
  return (
        <Avatar alt="Remy Sharp" sx={{ width: 350, height: 350 }} src={neha}/>
  );
}
