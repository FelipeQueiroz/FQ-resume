import { Box, Heading, Image, Tag, Text } from '@chakra-ui/react';

import { ITimeLine } from '../../types';

interface IProps {
  projectDetails: ITimeLine;
}

function ProjectTimelineCard(props: IProps) {
  const { projectDetails } = props;
  const { imageUrl, projectTitle, description, tagsList } = projectDetails;

  return (
    <Box px="12px">
      <Box display="flex" justifyContent="center">
        <Image
          src={imageUrl}
          alt="project image"
          width="80px"
          height="80px"
          borderRadius="10px"
        />
      </Box>
      <Heading size="md" my="10px">
        {projectTitle}
      </Heading>
      <Text my="10px" whiteSpace="pre-line">
        {description}
      </Text>
      <Box>
        {tagsList?.map((tag) => (
          <Tag colorScheme="blue" m="5px" key={tag.id}>
            {tag.name}
          </Tag>
        ))}
      </Box>
    </Box>
  );
}

export default ProjectTimelineCard;
