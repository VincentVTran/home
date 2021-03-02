import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card'
import './landingPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    paddingLeft: 0,
    paddingRight: 0,
    backgroundImage: '../../resources/background.jpg'
  },
  titleText: {
   
  },
  backgroundTop: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#fab35c',
    paddingBottom: theme.spacing(5),
  },
  backgroundBottom: {
    paddingTop: theme.spacing(5),
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white'
  },
  control: {
    padding: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

function LandingPage() {
  const classes = useStyles();
  return (
      <Container maxWidth="xl" className={classes.root}>
        <Container maxWidth="xl" className={classes.backgroundTop}>
          <Container maxWidth="md">
          <h1 className="titleHeader"> Vincent Tran </h1>
            <Card elevation={20} className={classes.control}> </Card>
          </Container>
        </Container>

        <Container maxWidth="xl" className={classes.backgroundBottom}>
          <Container maxWidth="md">
            <Card elevation={20} className={classes.control}> </Card>
          </Container>
        </Container>
    

      </Container>
      
  );
}

export default LandingPage;
