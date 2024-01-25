import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  width: 600,
  fontFamily: theme.typography.fontFamily,
}));
