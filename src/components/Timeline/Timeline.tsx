import { Chrono } from 'react-chrono';

import { Box } from '@chakra-ui/react';

import { ITimeLine } from '../../types';
import ProjectTimelineCard from '../ProjectTimelineCard/ProjectTimelineCard';

interface IProps {
  timelineItemsList: ITimeLine[];
}

function Timeline(props: IProps) {
  const { timelineItemsList } = props;

  const renderTimelineCard = (item: ITimeLine) => (
    <ProjectTimelineCard key={item.id} projectDetails={item} />
  );

  return (
    <Box overflowY="scroll" maxH="70vh" className="timeline-container">
      <Chrono
        theme={{
          primary: 'white',
          secondary: 'black',
          titleColor: 'white',
        }}
        slideShow
        focusActiveItemOnLoad
        hideControls
        borderLessCards
        useReadMore
        items={timelineItemsList}
      >
        {timelineItemsList.map((eachItem) => renderTimelineCard(eachItem))}
      </Chrono>
    </Box>
  );
}

export default Timeline;
