import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

import { Avatar, Box, ScaleFade, Text } from '@chakra-ui/react';

function Home() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: '-200px' },
    { disconnectOnLeave: false }
  );
  return (
    <Box ref={ref}>
      <ScaleFade initialScale={0.9} in={inViewport} whileHover={{ scale: 1.2 }}>
        <Box display="flex" alignItems="center" gap={10}>
          <Avatar
            size="2xl"
            borderRadius="10px"
            src="https://avatars.githubusercontent.com/u/28742231?s=400&u=90793537b4ca2a9ba2b0ba03b80b7465dcbd10d1&v=4"
          />
          <Box>
            <Text fontSize="64px" color="blackAlpha.800">
              Felipe Queiroz
            </Text>
            <Text fontSize="32px" color="blackAlpha.800">
              Web Developer
            </Text>
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
}
export default Home;
