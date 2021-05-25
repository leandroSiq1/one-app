import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { Card, CardHeader, CardActions, Avatar, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ModalConfirm from './ModalConfirm';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function CustomerCard({ 
  id,
  name, 
  lastName, 
  email, 
  avatar,
  className,
  onRemoveCustomer
}) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState();

  function handleToggleOpenModal() {
    setOpenModal(!openModal);
  }

  function handleConfirmModal(id) {
    onRemoveCustomer(id);
    handleToggleOpenModal();
  }

  function handleRemoveCustomer() {
    handleToggleOpenModal();
  }

  return (
    <>
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
          <IconButton aria-label="Editar Cliente">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Deletar Cliente" onClick={handleRemoveCustomer}>
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
        open={openModal}
        title="Deseja realmente excluir este cadastro ?"
        message="Ao confirmar não sera possivel reverter esta operação."
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
      />
    </>
  )
}
