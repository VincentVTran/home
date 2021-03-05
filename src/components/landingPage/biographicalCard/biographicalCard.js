import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import './biographicalCard.css';
const useStyles = makeStyles((theme) => ({
    cards: {
    },
}));

  
function BiographicalCard() {
    const classes = useStyles();
    return (
    <Card elevation={20} className={classes.cards}>
        <CardContent>
            <Typography class="cardSubject" variant="h5" component="h2">About Me </Typography>
            
            <Typography class="cardPrimary" variant="h5" component="h2">Current School </Typography>
            <Typography class="cardSecondary" color="textSecondary" gutterBottom>University of Arkansas</Typography>
            
            <Typography class="cardPrimary" variant="h5" component="h2">Major</Typography>
            <Typography class="cardSecondary" color="textSecondary" gutterBottom>Computer Engineering</Typography>

            <Typography class="cardPrimary" variant="h5" component="h2">Hometown</Typography>
            <Typography class="cardSecondary" color="textSecondary" gutterBottom>Fayetteville, AR</Typography>
        </CardContent>
    </Card>
    );
}

export default BiographicalCard;