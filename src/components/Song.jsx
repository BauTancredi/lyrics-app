import React, { Fragment } from "react";

const Song = ({ lyric }) => {
  if (lyric.length === 0) return null;
  return (
    <Fragment>
      <h2>Song Lyrics</h2>
      <p className="letra">{lyric}</p>
    </Fragment>
  );
};

export default Song;
