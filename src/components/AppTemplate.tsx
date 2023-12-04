import { AppBar, Typography, Box, Toolbar, Button, Link, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link as RouterLink, Outlet, useLocation, useMatch } from 'react-router-dom';
import { RootState } from '../appStore';
import { PATHS, TPaths } from '../data';

type Props = {
  paths: TPaths;
};

export const AppTemplate = ({ paths }: Props) => {
  const { translations } = useSelector((state: RootState) => state.languages);
  const location = useLocation();

  const getVariant = (page: string) => (page === location.pathname ? 'inherit' : 'body2');

  const isEditStory = useMatch(PATHS.EDIT_STORY);
  const isAddStory = useMatch(PATHS.ADD_STORY);
  const isStories = useMatch(PATHS.STORIES);

  const getTitle = () => {
    if (isEditStory) return translations.editStory.title;
    if (isAddStory) return translations.addStory.title;
    if (isStories) return translations.stories.title;
  };

  return (
    <>
      <header role="heading" aria-level={0}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                {translations.appName}
              </Typography>
              <Button>
                <Link component={RouterLink} to={paths.STORIES} underline="none" variant={getVariant(paths.STORIES)}>
                  {translations.menu.stories}
                </Link>
              </Button>
              <Button>
                <Link
                  component={RouterLink}
                  to={paths.ADD_STORY}
                  underline="none"
                  variant={getVariant(paths.ADD_STORY)}
                >
                  {translations.menu.addStory}
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </header>

      <main role="main">
        <Container maxWidth="md" sx={{ paddingTop: '40px' }}>
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '32px' }}>
            {getTitle()}
          </Typography>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
