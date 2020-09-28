import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import {
  Grid,
  Paper,
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
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  subTitle: {
    padding: "6px 16px",
    color: theme.palette.common.white,
  },
  postCard: {
    minHeight: 330,
    margin: "6px 16px",
    backgroundColor: theme.palette.primary.light,
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
    <Paper elevation={3} xs={12} className={classes.latestPostWrapper}>
      <Grid container>
        <Grid item xs={12} className={classes.subTitle}>
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
                      color="secondary"
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.shortDescription}
                      color="textPrimary"
                      component="p"
                    >
                      {post.shortDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions disableSpacing>
                  <Button size="small" variant="outlined" color="secondary">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default LatestPostsSection;

LatestPostsSection.propTypes = {
  latestPosts: PropTypes.array,
};
