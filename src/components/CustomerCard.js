import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { Card, CardHeader, CardActions, Avatar, IconButton } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function CustomerCard({ 
  name, 
  lastName, 
  email, 
  avatar,
  className 
}) {
  const classes = useStyles();

  return (
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}>
            L
          </Avatar>
        }
        title={`${name} ${lastName}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
