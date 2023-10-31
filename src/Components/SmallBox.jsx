import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './SmallBox.css'




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    margin:'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {

  const classes = useStyles();

//   Code for handling expanding of read more type button
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };    

  return (
    <div>
    <Card className={classes.root} classes={{root:'card_style'}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        titleTypographyProps={{variant:'h4',color:"primary"}}
        title={props.title}
        />

   {/* <Typography variant="h4" color="initial" className="card_header">{props.title}</Typography> */}
      <CardContent>
        {/* <Typography  variant="paragraph" color="textSecondary" component="p"> */}
        <Typography paragraph>
        {props.mainContent}
     </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>More Information:</Typography> */}
          <Typography paragraph>
          {props.extraContent1}
          </Typography>
          <Typography paragraph>
          {props.extraContent2}
          </Typography>
          <Typography>
          {props.extraContent3}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}