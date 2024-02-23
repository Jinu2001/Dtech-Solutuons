import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const heroes = [
  {
    name: 'Kalana Weerasinghe',
    title: 'Application Support Analyst Lead',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    imageUrl: 'path_to_image',
    twitterUrl: 'https://twitter.com/',
    linkedInUrl: 'https://linkedin.com/'
  },
  {
    name: 'Ruwan Thushara',
    title: 'Director, Undergraduate Analytics and Planning',
    description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
    imageUrl: 'path_to_image',
    twitterUrl: 'https://twitter.com/',
    linkedInUrl: 'https://linkedin.com/'
  },
  {
    name: 'Kalana Weerasinghe',
    title: 'Application Support Analyst Lead',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    imageUrl: 'path_to_image',
    twitterUrl: 'https://twitter.com/',
    linkedInUrl: 'https://linkedin.com/'
  },
  {
    name: 'Kalana Weerasinghe',
    title: 'Application Support Analyst Lead',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    imageUrl: 'path_to_image',
    twitterUrl: 'https://twitter.com/',
    linkedInUrl: 'https://linkedin.com/'
  }
];

const HeroCard = ({ hero }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={hero.imageUrl}
        alt={hero.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hero.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hero.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hero.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton aria-label="twitter" href={hero.twitterUrl}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="linkedin" href={hero.linkedInUrl}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const HeroesSection = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f0f4f8', p: 4,mb:4}}>
       <Typography variant="h6" sx={{ mb: 2 }} style={{textAlign:'center',color:'#084674', fontWeight:'bold'}}>
        Tutors
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }} style={{textAlign:'center',fontWeight:'bold'}}>
        Meet the Heroes
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }} style={{textAlign:'center'}}>
        On DTEch, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        {heroes.map((hero) => (
          <Grid item key={hero.name}>
            <HeroCard hero={hero} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroesSection;
