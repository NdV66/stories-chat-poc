import { Typography, styled } from '@mui/material';
import { TTranslate } from '../../../languages';

type Props = {
  translations: TTranslate;
};

export const NoStories = ({ translations }: Props) => (
  <StyledTypography variant="subtitle2">{translations.stories.empty}</StyledTypography>
);

const StyledTypography = styled(Typography)(() => ({
  textAlign: 'center',
  marginTop: '32px',
}));
