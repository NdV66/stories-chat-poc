import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledTextField = styled(TextField)(() => ({
  width: '100%',
}));

export const StyledButtonWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const StyledButton = styled(Button)(() => ({
  marginTop: '32px',
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledFormWrapper = styled('form')(() => ({
  maxWidth: '400px',
}));
