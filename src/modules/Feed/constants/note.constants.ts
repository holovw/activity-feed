import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PersonIcon from '@mui/icons-material/Person';

import { NoteTypes } from '../../../ducks/note.ducks';

export const NoteIconMap = {
  [NoteTypes.Message]: ChatBubbleOutlineIcon,
  [NoteTypes.Phone]: PhoneIcon,
  [NoteTypes.Coffee]: LocalCafeIcon,
  [NoteTypes.Beer]: SportsBarIcon,
  [NoteTypes.Meeting]: PersonIcon,
};
