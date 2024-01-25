import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import MuiPaper, { PaperProps } from '@mui/material/Paper';
import Typography, { TypographyProps } from '@mui/material/Typography';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const Paper = styled(MuiPaper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.info.light,
  border: 'none',
}));

export const Message = styled(Typography)<TypographyProps>(({ theme }) => ({
  width: '100%',
  color: grey[900],
  fontWeight: theme.typography.fontWeightLight,
}));

export const Section = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const Activity = styled(Message)<TypographyProps>(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const Person = styled(Message)<TypographyProps>(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.primary.main,
}));

export const Icon = styled(SvgIcon)<SvgIconProps>(() => ({
  width: 24,
  height: 24,
  fill: 'white',
  path: 'white',
}));
