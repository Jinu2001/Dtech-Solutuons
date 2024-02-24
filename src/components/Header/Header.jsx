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
        <br></br>
      </Typography>
      <Typography variant="subtitle1" mt={2}>
      Explore a world of online learning at Dtec. Our platform offers a curated selection of courses to enhance your expertise and fuel your passions. Join us in the pursuit of knowledge and skill development. Dtec - where learning meets convenience.
      </Typography>

      <Box
        position="absolute"
        top={50}
        right={-610}
        width={90}
        height={122}
        bgcolor="white"
        border="1px solid #1A87C9"
        borderRadius="20px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding="0px"
        sx={{ marginLeft: 5, marginBottom: 1 }}
      >
        {/* Left side of the box - Laptop icon */}
        <IconButton style={{ color: '#1A87C9', paddingLeft: 24 }}>
          <LaptopIcon style={{ fontSize: 40 }} />
        </IconButton>

        {/* Right side of the box - Texts */}
        <div style={{ textAlign: 'center', flex: 1 }}>
          <Typography variant="h1" sx={{ color: 'black',  fontSize: 30, }}>10+</Typography>
          <Typography variant="h6" sx={{ color: 'black', fontSize: 15 }}>Courses</Typography>
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
        padding="0px"
      >
        {/* Left side of the box - Tutor icon */}
        <IconButton style={{ color: '#1A87C9', paddingLeft: 10 }}>
          <TutorIcon style={{ fontSize: 50 }} />
        </IconButton>

        {/* Right side of the box - Texts */}
        <div style={{ marginRight: 20, textAlign: 'center', flex: 1 }}>
          <Typography variant="h1" style={{ color: 'black', fontSize: 30 }}>20+</Typography>
          <Typography variant="h6" style={{ color: 'black', fontSize: 15 }}>Tutors</Typography>
        </div>
      </Box>

      <Box
        position="absolute"
        top={460}
        right={-650}
        width={150}
        height={80}
        bgcolor="white"
        border="1px solid #1A87C9"
        borderRadius="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        padding="0px"
      >
        {/* Left side of the box - Courses icon */}
        <IconButton style={{ color: '#1A87C9', paddingLeft: 10 }}>
          <CoursesIcon style={{ fontSize: 45 }} />
        </IconButton>

        {/* Right side of the box - Texts */}
        <div style={{ marginRight: 20, textAlign: 'center', flex: 1 }}>
          <Typography variant="h1" style={{ color: 'black', fontSize: 30 }}>100+</Typography>
          <Typography variant="h6" style={{ color: 'black', fontSize: 15 }}>Videos</Typography>
          
        </div>
      </Box>
    </Box>
  );
};

export default Header;
