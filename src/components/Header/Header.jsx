import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import TutorIcon from '@mui/icons-material/EmojiPeople';
import CoursesIcon from '@mui/icons-material/VideoLibrary';

const Header = () => {
  return (
    <Box py={10} sx={{ width: { xs: '100%', sm: '80%', md: '70%', lg: '40%' }, marginLeft: '5%', position: 'relative' }}>
      <Typography variant="h2" style={{ fontWeight: 'bolder' }}>
        Up Your <span style={{ color: '#1B86C8' }}>Skills</span> <br /> To{' '}
        <span style={{ color: '#1B86C8' }}>Advance</span> Your <br />{' '}
        <span style={{ color: '#1B86C8' }}>Career</span> Path
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum aspernatur vero sint molestias sunt molestiae
        eos pariatur voluptates beatae quaerat consectetur magni, minima minus velit cumque ipsa. Neque, odit?
      </Typography>

      {/* Right-side boxes */}
      <Box
        position="absolute"
        top={50}
        right={-620}
        width={100}
        height={130}
        bgcolor="white"
        border="1px solid #1A87C9"
        borderRadius="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="coloumn"
        padding="10px"
      >
        {/* Left side of the box - Laptop icon */}
        <IconButton style={{ color: '#1A87C9', padding: 0 }}>
          <LaptopIcon style={{ fontSize: 40 }} />
        </IconButton>

        {/* Right side of the box - Texts */}
        <div style={{ marginLeft: 10, textAlign: 'center', flex: 1 }}>
          <Typography variant="subtitle1" style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>10+</Typography>
          <Typography variant="subtitle1" style={{ color: '#c0c0c0', fontSize: 14 }}>Courses</Typography>
        </div>
      </Box>

      <Box
        position="absolute"
        top={250}
        right={-190}
        width={150}
        height={80}
        bgcolor="white"
        border="1px solid #1A87C9"
        borderRadius="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        padding="10px"
      >
        {/* Left side of the box - Tutor icon */}
        <IconButton style={{ color: '#1A87C9', padding: 0 }}>
          <TutorIcon style={{ fontSize: 40 }} />
        </IconButton>

        {/* Right side of the box - Texts */}
        <div style={{ marginLeft: 10, textAlign: 'center', flex: 1 }}>
          <Typography variant="subtitle1" style={{ color: 'black', fontSize: 14 }}>Tutor</Typography>
          <Typography variant="subtitle1" style={{ color: '#c0c0c0', fontSize: 14 }}>20+</Typography>
        </div>
      </Box>

      <Box
        position="absolute"
        top={460}
        right={-620}
        width={100}
        height={80}
        bgcolor="white"
        border="1px solid #1A87C9"
        borderRadius="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        padding="10px"
      >
        {/* Left side of the box - Courses icon */}
        <IconButton style={{ color: '#1A87C9', padding: 0 }}>
          <CoursesIcon style={{ fontSize: 40 }} />
        </IconButton>

        {/* Right side of the box - Texts */}
        <div style={{ marginLeft: 10, textAlign: 'center', flex: 1 }}>
          <Typography variant="subtitle1" style={{ color: 'black', fontSize: 14 }}>Video Courses</Typography>
          <Typography variant="subtitle1" style={{ color: '#c0c0c0', fontSize: 14 }}>10+</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Header;
