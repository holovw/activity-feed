import React, { FC, useState, useCallback, memo } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { INote } from '../../../../../../ducks/note.ducks';

import { Actions, OpenButton } from './NoteActions.styles';
import { Icon } from '../../Note.styles';

type NoteActions = {
  note: INote,
  onEdit(note: INote): void,
  onDelete(note: INote): void,
};

const NoteActions: FC<NoteActions> = ({ note, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteNote = useCallback((note: INote) => () => {
    onDelete(note);
    handleClose();
  }, [onDelete, handleClose]);

  const editNote = useCallback((note: INote) => () => {
    onEdit(note);
    handleClose();
  }, [onEdit, handleClose]);

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
        <MenuItem onClick={editNote(note)}>Edit</MenuItem>
      </Menu>
    </Actions>
  );
};

export default memo(NoteActions);
