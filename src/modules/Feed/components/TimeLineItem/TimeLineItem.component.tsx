import React, { forwardRef } from 'react';
import {
  Container,
  Content,
  DateBox,
  IconCircle,
  Icon
} from './TimeLineItem.styles';

import { getPassedTimeFormatted } from './TimeLineItem.utils.ts';

interface TimeLineItemProps {
  icon: React.ElementType;
  actionDate?: string;
  children?: React.ReactNode;
}

const TimeLineItem = forwardRef<HTMLDivElement, TimeLineItemProps>(({ icon, actionDate, children }, ref) => {
  const passedTimeFormatted = actionDate ? getPassedTimeFormatted(actionDate) : null;

  return (
    <Container ref={ref}>
      <DateBox>{passedTimeFormatted}</DateBox>
      <Content>
        <IconCircle>
          <Icon component={icon} inheritViewBox />
        </IconCircle>
        {children}
      </Content>
    </Container>
  );
});

export default TimeLineItem;
