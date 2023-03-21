import Lottie from 'lottie-react';
import React, { useEffect, useRef, useState } from 'react';

import { Box, Button, Heading } from '@chakra-ui/react';

import background from '../assets/lottie/53851-cold-mountain-background.json';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const sections = [
    {
      id: '1',
      label: 'Home',
      content: <Home />,
    },
    {
      id: '2',
      label: 'About me',
      content: <About />,
    },
    {
      id: '3',
      label: 'Projects',
      content: <Projects />,
    },
  ];
  const sectionRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const [isMounted, setIsMounted] = useState(false);
  const SCROLL_THRESHOLD = 50;

  useEffect(() => {
    sectionRefs.current = sections.map(
      (_, i) => sectionRefs.current[i] || React.createRef()
    );
    setIsMounted(true);
  }, [sections]);

  useEffect(() => {
    if (isMounted) {
      const currentSectionIndex = window.location.hash
        ? sections.findIndex(
            (section) => section.id === window.location.hash.slice(1)
          )
        : 0;
      scrollToSection(currentSectionIndex);
    }
  }, [isMounted, sections]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index].current?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollDirection = prevScrollPos < currentScrollPos ? 'down' : 'up';
      prevScrollPos = currentScrollPos;

      console.log(scrollDirection);

      const currentSectionIndex = sectionRefs.current.findIndex(
        (ref) =>
          ref.current &&
          ref.current.offsetTop <= currentScrollPos + SCROLL_THRESHOLD
      );
      if (currentSectionIndex !== activeSectionIndex) {
        setActiveSectionIndex(currentSectionIndex);
        scrollToSection(currentSectionIndex);
      }
    };

    const container = document.querySelector('#container');
    if (!container)
      return () => {
        console.log('aaa');
      };
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App" id="container">
      <Box
        position="absolute"
        zIndex={-1}
        width="100%"
        maxHeight="100vh"
        top={0}
        left={0}
        right={0}
        gap={-10}
      >
        <Lottie animationData={background} loop autoPlay />
      </Box>
      <Heading
        width="100%"
        position="fixed"
        alignItems="center"
        justifyContent="center"
        display="flex"
        backgroundColor="rgb(13, 21, 77, 0.6)"
        gap={10}
        top={0}
        py={5}
      >
        {sections.map((section, i) => (
          <Button
            key={i}
            onClick={() => scrollToSection(i)}
            backgroundColor="transparent"
            colorScheme="whiteAlpha"
          >
            {section.label}
          </Button>
        ))}
      </Heading>

      {sections.map((section, i) => (
        <Box
          key={i}
          className="section"
          ref={sectionRefs.current[i]}
          w="100%"
          alignItems="center"
          justifyContent="center"
          display="flex"
          height="100vh"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          {section.content}
        </Box>
      ))}
    </div>
  );
}

export default App;
