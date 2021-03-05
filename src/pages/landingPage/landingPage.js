import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './landingPage.css';

import BiographicalCard from '../../components/landingPage/biographicalCard/biographicalCard';
import ExperienceTimeline from '../../components/landingPage/experienceTimeline/experienceTimeline';

const useStyles = makeStyles((theme) => ({
  backgroundTop: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#fab35c',
    paddingBottom: theme.spacing(5),
  },
  backgroundBottom: {
    paddingTop: theme.spacing(),
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white'
  },
}));

function LandingPage() {
  const classes = useStyles();
  return (
      <Container maxWidth="xl" class="root">

        <Container maxWidth="xl" class="backgroundTop">
          
          <h1 class="titleHeader"> Vincent Tran </h1>
          
          <Container maxWidth="md">
            <BiographicalCard></BiographicalCard>
          </Container>
  
        </Container>

        <Container maxWidth="xl" class="backgroundBottom">

          <Container maxWidth="md">
            <ExperienceTimeline></ExperienceTimeline>
          </Container>

        </Container>
    

      </Container>
      
  );
}

export default LandingPage;
