import React from 'react';
import { styled, Theme } from '@mui/material/styles';

import MuiPaper, { PaperProps } from '@mui/material/Paper';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Button, { ButtonProps } from '@mui/material/Button';

export const Paper = styled(MuiPaper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.info.light,
  border: 'none',
}));

export const TextInput = styled(TextField)<BaseTextFieldProps>(() => ({
  width: '100%',
  backgroundColor: 'white',
}));

export const TypeSelect = styled('div')(() => ({
  display: 'flex',
}));

const activeItemStyling = (theme: Theme) => ({
  backgroundColor: theme.palette.primary.main,
  '& .MuiSvgIcon-root': {
    path: 'white',
    fill: 'white',
  },
});

interface TypeButtonProps {
  isActive: boolean;
  theme?: Theme;
  children?: React.ReactNode;
}

export const TypeButton = styled('button')<TypeButtonProps>(({ theme, isActive }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  marginRight: theme.spacing(0.5),
  borderRadius: 25,
  border: `1px solid ${theme.palette.info.main}`,
  backgroundColor: 'white',
  '&:hover': activeItemStyling(theme),
  ...(isActive && activeItemStyling(theme)),
}));

export const ActionBar = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(1),
}));

export const Icon = styled(SvgIcon)<SvgIconProps>(({ theme }) => ({
  width: 16,
  height: 16,
  fill: theme.palette.info.main,
  path: theme.palette.info.main,
}));

export const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  fontSize: 12,
}));

export const Form = styled('form')(() => ({}));
