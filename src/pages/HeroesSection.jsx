import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const heroes = [
  {
    name: 'Kalana Weerasinghe',
    title: 'Application Support Analyst Lead',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    imageUrl: 'public/images/WhatsApp Image 2024-01-15 at 19.53.15_a15c3cca.jpg',
    twitterUrl: 'https://twitter.com/',
    linkedInUrl: 'https://linkedin.com/'
  },
  {
    name: 'Ruwan Thushara',
    title: 'Director, Undergraduate Analytics and Planning',
    description: 'Lead engineering teams at Figma, Pitch.',
    imageUrl: 'public/images/WhatsApp Image 2024-01-15 at 19.53.15_a15c3cca.jpg',
    twitterUrl: 'https://twitter.com/',
    linkedInUrl: 'https://linkedin.com/'
  },
  {
    name: 'Kalana Weerasinghe',
    title: 'Application Support Analyst Lead',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    imageUrl: 'public/images/WhatsApp Image 2024-01-15 at 19.53.15_a15c3cca.jpg',
    twitterUrl: 'https://twitter.com/',
    linkedInUrl: 'https://linkedin.com/'
  },
  {
    name: 'Kalana Weerasinghe',
    title: 'Application Support Analyst Lead',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    imageUrl: 'public/images/WhatsApp Image 2024-01-15 at 19.53.15_a15c3cca.jpg',
    twitterUrl: 'https://twitter.com/',
    linkedInUrl: 'https://linkedin.com/'
  }
];

const HeroCard = ({ hero }) => {
  return (
    <Card  style={{background:'#F9FAFB'}} sx={{ maxWidth: 300, margin: '20px' , height:'320px'}}>
      <CardMedia
        // component="img"
        image={hero.imageUrl}
        alt={hero.name}

        // component="img"
        style={{ objectFit: 'cover' ,width:'80px', height: '80px', borderRadius: '100%' , margin: '20px 50px  10px 110px'}}


      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center '}}>
          {hero.name}
        </Typography>
        <Typography variant="body2" style={{textAlign:'center ', color:'#084674',marginBottom:'20px' }}>
          {hero.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{marginBottom:'20px', textAlign:'center'}}>
          {hero.description}
        </Typography>
        <Box sx={{ mt: 2, textAlign: 'center' }} >
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
    <Box sx={{ flexGrow: 1, p: 4,mb:4}}>
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
