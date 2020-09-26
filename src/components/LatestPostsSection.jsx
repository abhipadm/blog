import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  latestPostWrapper: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  postCard: {
    minHeight: 330,
    backgroundColor: theme.palette.secondary.main,
  },
  cardMedia: {
    height: 350,
  },
  cardActionArea: {
    minHeight: 300,
  },
  cardContent: {
    paddingTop: theme.spacing(1),
  },
  shortDescription: {
    whiteSpace: "break-spaces",
    color: theme.palette.secondary.contrastText,
  },
}));

const LatestPostsSection = (props) => {
  const classes = useStyles();
  const { latestPosts } = props;
  const [enableTransition, setEnableTransition] = React.useState(true);

  useEffect(() => {
    if (latestPosts && latestPosts.length > 0) {
      setEnableTransition((prev) => true);
    }
  }, [latestPosts]);

  return (
    <Grid container spacing={2} className={classes.latestPostWrapper}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h5" color="inherit">
          Latest Posts
        </Typography>
      </Grid>

      {latestPosts.map((post) => (
        <Grid item xs={12} md={4} key={post.id}>
          <Grow in={enableTransition} timeout={1000}>
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
          </Grow>
        </Grid>
      ))}
    </Grid>
  );
};

export default LatestPostsSection;

LatestPostsSection.propTypes = {
  latestPosts: PropTypes.array,
};
