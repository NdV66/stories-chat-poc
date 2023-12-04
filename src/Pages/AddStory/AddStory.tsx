import { StyledBox, StyledFormWrapper, StyledTextField, StyledButton, StyledButtonWrapper } from '../../components';
import { useAddStoryViewModel } from './AddStory.viewModel';
import { TPaths } from '../../data';
import { IAddStoryService } from './AddStory.types';
import { Box, CircularProgress } from '@mui/material';

type Props = {
  paths: TPaths;
  service: IAddStoryService;
};

export const AddStory = ({ paths, service }: Props) => {
  const { translations, formik, isLoading } = useAddStoryViewModel(paths, service);

  return (
    <>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      <StyledBox>
        <StyledFormWrapper onSubmit={formik.handleSubmit} autoComplete="off">
          <StyledTextField
            name="childName"
            label={translations.addStory.childName}
            variant="standard"
            value={formik.values.childName}
            onChange={formik.handleChange}
            error={formik.touched.childName && !!formik.errors.childName}
            helperText={formik.touched.childName && formik.errors.childName}
            disabled={isLoading}
          />
          <StyledTextField
            name="childAge"
            label={translations.addStory.childAge}
            variant="standard"
            value={formik.values.childAge}
            onChange={formik.handleChange}
            error={formik.touched.childAge && !!formik.errors.childAge}
            helperText={formik.touched.childAge && formik.errors.childAge}
            disabled={isLoading}
          />
          <StyledTextField
            label={translations.addStory.topic}
            name="topic"
            variant="standard"
            value={formik.values.topic}
            onChange={formik.handleChange}
            error={formik.touched.topic && !!formik.errors.topic}
            helperText={formik.touched.topic && formik.errors.topic}
            disabled={isLoading}
          />
          <StyledTextField
            label={translations.addStory.numberOfWords}
            variant="standard"
            name="numberOfWords"
            value={formik.values.numberOfWords}
            onChange={formik.handleChange}
            error={formik.touched.numberOfWords && !!formik.errors.numberOfWords}
            helperText={formik.touched.numberOfWords && formik.errors.numberOfWords}
            disabled={isLoading}
          />

          <StyledButtonWrapper>
            <StyledButton type="submit" disabled={isLoading}>
              {translations.addStory.submit}
            </StyledButton>
          </StyledButtonWrapper>
        </StyledFormWrapper>
      </StyledBox>
    </>
  );
};
