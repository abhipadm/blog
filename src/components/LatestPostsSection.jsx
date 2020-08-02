import React from "react";
import { PropTypes } from "prop-types";
import {
  Grid,
  GridListTile,
  ListSubheader,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  latestPostSubheader: {
    color: theme.palette.secondary.main,
  },
  postCard: {
    minHeight: 330,
    padding: theme.spacing(1),
  },
  cardMedia: {
    height: 140,
  },
  cardActionArea: {
    minHeight: 300,
  },
  cardContent: {
    paddingTop: theme.spacing(3),
  },
  shortDescription: {
    overflow: "Hidden",
    whiteSpace: "break-spaces",
  },
}));

const LatestPostsSection = (props) => {
  const classes = useStyles();
  const { latestPosts } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h5" color="inherit">
          Latest Posts
        </Typography>
      </Grid>

      {latestPosts.map((post) => (
        <Grid item xs={12} md={4} key={post.id}>
          <Card className={classes.postCard}>
            <CardActionArea className={classes.CardActionArea}>
              <CardMedia
                component="img"
                alt={post.title}
                image={post.img}
                title={post.title}
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="primary"
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.shortDescription}
                  color="textSecondary"
                  component="p"
                >
                  {post.shortDescription}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions disableSpacing>
              <Button size="small" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LatestPostsSection;

LatestPostsSection.propTypes = {
  latestPosts: PropTypes.array.isRequired,
};
