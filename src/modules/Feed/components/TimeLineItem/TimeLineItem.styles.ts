import { styled } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const Container = styled('div')(() => ({
  paddingLeft: 12,
  display: 'flex',
  justifyContent: 'flex-start',
}));

export const Content = styled('div')(({ theme }) => ({
  width: '100%',
  borderLeft: `1px solid ${theme.palette.info.main}`,
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  position: 'relative',
}));

export const IconCircle = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  left: -18,
  top: 24,
  border: `1px solid ${theme.palette.info.main}`,
  borderRadius: 25,
  background: 'white',
}));

export const DateBox = styled('div')(() => ({
  textAlign: 'right',
  width: 40,
  padding: '30px 24px 0 0',
}));

export const Icon = styled(SvgIcon)<SvgIconProps>(({ theme }) => ({
  fill: theme.palette.info.main,
  path: theme.palette.info.main,
  width: 16,
  height: 16,
}));
