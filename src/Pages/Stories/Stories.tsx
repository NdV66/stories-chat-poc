import { Typography } from '@mui/material';
import { NoStories, OneStory } from './components';
import { useStoriesViewModel } from './Stories.viewModel';
import { TPaths } from '../../data';

type Props = {
  paths: TPaths;
};

export const Stories = ({ paths }: Props) => {
  const { stories, deleteStoryById, translations, editStoryById } = useStoriesViewModel(paths);

  return (
    <>
      {stories.length ? (
        <>
          <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
            {translations.stories.count}: ({stories.length})
          </Typography>
          {stories.map((el) => (
            <OneStory
              story={el}
              key={el.id}
              translations={translations}
              onDelete={deleteStoryById}
              onEdit={editStoryById}
            />
          ))}
        </>
      ) : (
        <NoStories translations={translations} />
      )}
    </>
  );
};
