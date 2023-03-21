import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

import { Box, Heading, ScaleFade, Text } from '@chakra-ui/react';

import Timeline from '../components/Timeline/Timeline';
import timelineItemsList from '../data/timelinedata';

function About() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: '-200px' },
    { disconnectOnLeave: false }
  );
  return (
    <Box ref={ref} display="flex">
      <ScaleFade initialScale={0.9} in={inViewport}>
        <Box display={['block', 'flex']} justifyContent="center">
          <Box width="40%" px="50px">
            <Heading size="3xl" color="white">
              About me
            </Heading>
            <Box gap="5px">
              <Text color="white" my="8px">
                I am a frontend developer with 3 years of React work experience
                and 5 years of experience in the IT market. My professional life
                has been defined by my passion for technology and my commitment
                to excellence. I have spent countless hours developing my skills
                in front-end development, staying up-to-date with the latest
                trends and best practices to create compelling and responsive
                user interfaces.
              </Text>
              <Text color="white" my="8px">
                Throughout my career, I have gained a deep understanding of the
                intricacies of web development, from optimizing page load times
                to ensuring cross-browser compatibility. I have worked
                collaboratively with team members, using my expertise to deliver
                high-quality projects that meet client requirements and exceed
                expectations.
              </Text>
              <Text color="white" my="8px">
                My dedication to my craft has earned me a reputation as a
                reliable and knowledgeable developer, and my experience with
                React has made me a sought-after specialist in the field. I take
                pride in my work and am always looking for new challenges to
                take on, pushing myself to learn and grow as a developer. As I
                continue to advance in my career, I am sure to make an even
                greater impact in the world of front-end development.
              </Text>
            </Box>
          </Box>
          <Box width="48%" px="50px" textAlign="right">
            <Timeline timelineItemsList={timelineItemsList} />
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
}
export default About;
