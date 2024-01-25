import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';

export const Actions = styled('div')(() => ({
  width: 36,
}));

export const OpenButton = styled(Fab)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: theme.palette.primary.light,
}));
