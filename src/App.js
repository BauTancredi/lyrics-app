import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Song from "./components/Song";
import Info from "./components/Info";

function App() {
  const [searchLyric, setsSearchLyric] = useState({});
  const [lyric, setLyric] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (Object.keys(searchLyric).length === 0) return;

    const fetchAPILyric = async () => {
      const { artist, song } = searchLyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyric, info] = await Promise.all([axios(url), axios(url2)]);

      setLyric(lyric.data.lyrics);
      setInfo(info.data.artists[0]);
    };
    fetchAPILyric();
  }, [searchLyric, info]);

  return (
    <Fragment>
      <Form setsSearchLyric={setsSearchLyric} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
