import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import './experienceTimeline.css';

import capitalOneLogo from '../../../resources/capitalOne.png';
import jbhuntLogo from '../../../resources/jbhuntLogo.png';
import uofaLogo from '../../../resources/uofaLogo.png';
import acmLogo from '../../../resources/acmLogo.png';
import codeLogo from '../../../resources/codeLogo.png';

const useStyles = makeStyles((theme) => ({
    cards: {
        marginTop: theme.spacing(5),
        paddingTop: theme.spacing(1)
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

  
function ExperienceTimeline() {
    const classes = useStyles();
    return (
    <Card elevation={20} className={classes.cards}>
        <Typography class="cardSubject" variant="h5" component="h2">Professional Experience</Typography>
        <Timeline align="alternate">
            {/* Capital One */}
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        June 2021 - August 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <Avatar alt="capitalOne" src={capitalOneLogo}/>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1"> Capital One</Typography>
                    <Typography>Software Engineering Intern</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>

            {/* University of Arkansas */}
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        January 2021 - May 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <Avatar alt="uofa" src={uofaLogo} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">University of Arkansas</Typography>
                    <Typography>Research Assistant</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>

            {/* ACM */}
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        August 2020 - May2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <Avatar alt="acm" src={acmLogo} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1"> Association of Computing Machinery </Typography>
                    <Typography>Event Coordinator</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        June 2019 - May 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <Avatar alt="jbhunt" src={jbhuntLogo} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1"> J.B. Hunt </Typography>
                    <Typography>Application Development Intern</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        December 2019
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <Avatar alt="codeLogo" src={codeLogo} />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1"> Code.org </Typography>
                    <Typography>Program Volunteer</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>

            </Timeline>
    </Card>
    );
}

export default ExperienceTimeline;