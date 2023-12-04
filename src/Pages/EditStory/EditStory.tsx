import { useEditStoryViewModel } from './EditStory.viewModel';
import { TPaths } from '../../data';
import { StyledBox, StyledFormWrapper, StyledTextField, StyledButton, StyledButtonWrapper } from '../../components';
import { IEditStoryService } from './EditStory.types';

type Props = {
  paths: TPaths;
  service: IEditStoryService;
};

export const EditStory = ({ paths, service }: Props) => {
  const { translations, formik } = useEditStoryViewModel(paths, service);

  return (
    <StyledBox>
      <StyledFormWrapper onSubmit={formik.handleSubmit} autoComplete="off">
        <StyledTextField
          label={translations.editStory.storyTitle}
          name="title"
          variant="standard"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && !!formik.errors.title}
          helperText={formik.touched.title && formik.errors.title}
        />
        <StyledTextField
          label={translations.editStory.storyText}
          variant="standard"
          name="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          error={formik.touched.text && !!formik.errors.text}
          helperText={formik.touched.text && formik.errors.text}
        />

        <StyledButtonWrapper>
          <StyledButton type="submit">{translations.editStory.submit}</StyledButton>
        </StyledButtonWrapper>
      </StyledFormWrapper>
    </StyledBox>
  );
};
