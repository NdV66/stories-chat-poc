import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { AppTemplate } from '../../components';
import { PATHS } from '../../data';
import { AddStory, addStoryService } from '../AddStory';
import { Stories } from '../Stories';
import { useMuiTheme } from './App.viewModel';
import { DARK_THEME } from './theme';
import { EditStory } from '../EditStory';
import { editStoryService } from '../EditStory/EditStory.builder';

export const App = () => {
  const muiTheme = useMuiTheme(DARK_THEME);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <Router>
        <Routes>
          <Route path={PATHS.MAIN} element={<AppTemplate paths={PATHS} />}>
            <Route path={PATHS.ADD_STORY} element={<AddStory paths={PATHS} service={addStoryService} />} />
            <Route path={PATHS.EDIT_STORY} element={<EditStory paths={PATHS} service={editStoryService} />} />
            <Route path={PATHS.STORIES} element={<Stories paths={PATHS} />} />

            <Route path="/" element={<Navigate replace to={PATHS.STORIES} />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
