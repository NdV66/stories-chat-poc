import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { TTranslate } from '../../../languages';
import { TStoryDTO } from '../../../models';
import { ExpandMore } from './ExpandMore';

const MAX_SLICE = 100;

type Props = {
  story: TStoryDTO;
  translations: TTranslate;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export const OneStory = ({ story, translations, onDelete, onEdit }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText = story.text?.slice(0, MAX_SLICE) + '...';
  const subHeader = `${translations.oneStory.wordsCount}: ${story.text?.length}`;

  const handleExpandClick = () => setIsExpanded(!isExpanded);

  return (
    <StyledCard>
      <CardHeader title={story.title} subheader={subHeader} />
      <CardContent>
        <Typography variant="body2">{shortText}</Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label={translations.oneStory.edit} onClick={() => onEdit(story.id!)}>
          <EditOutlined />
        </IconButton>
        <IconButton aria-label={translations.oneStory.delete} onClick={() => onDelete(story.id!)}>
          <DeleteOutlined />
        </IconButton>

        <ExpandMore
          expand={isExpanded}
          onClick={handleExpandClick}
          aria-expanded={isExpanded}
          aria-label={translations.oneStory.showMore}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{story.text}</Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: '32px',
  marginTop: '32px',
  background: theme.palette.secondary.light,
}));
