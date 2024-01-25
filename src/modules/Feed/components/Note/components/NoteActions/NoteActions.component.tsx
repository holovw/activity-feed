import React, { FC, useState, useCallback } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Note as NoteType } from '../../../../../../ducks/note.ducks.ts';

import { Actions, OpenButton } from './NoteActions.styles.ts';
import { Icon } from '../../Note.styles.ts';

type NoteActions = {
  note: NoteType,
  onDelete(note: NoteType): void,
};

const NoteActions: FC<NoteActions> = ({ note, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteNote = useCallback((note: NoteType) => () => {
    onDelete(note);
    handleClose();
  }, [onDelete, handleClose]);

  return (
    <Actions>
      <OpenButton size="small" onClick={handleClick}>
        <Icon component={ArrowDropDownIcon} />
      </OpenButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={deleteNote(note)}>Delete</MenuItem>
      </Menu>
    </Actions>
  );
};

export default NoteActions;
