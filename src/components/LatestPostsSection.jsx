import React from "react";
import { PropTypes } from "prop-types";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  latestPostSubheader: {
    color: theme.palette.secondary.main,
  },
  listTitleBar: {
    whiteSpace: "break-spaces",
  },
}));

const LatestPostsSection = (props) => {
  const classes = useStyles();
  const { latestPosts } = props;

  return (
    <GridList cols={3}>
      <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
        <ListSubheader component="div" className={classes.latestPostSubheader}>
          <Typography variant="h4" component="h5" color="inherit">
            Latest Posts
          </Typography>
        </ListSubheader>
      </GridListTile>

      {latestPosts.map((post) => (
        <GridListTile key={post.img}>
          <img src={post.img} alt={post.title} />
          <GridListTileBar
            className={classes.listTitleBar}
            titlePosition="top"
            title={post.title}
            subtitle={<p>{post.shortDescription}</p>}
            actionIcon={
              <IconButton
                aria-label={`info about ${post.title}`}
                className={classes.icon}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default LatestPostsSection;

LatestPostsSection.propTypes = {
  latestPosts: PropTypes.array.isRequired,
};
