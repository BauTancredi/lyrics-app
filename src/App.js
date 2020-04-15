import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Song from "./components/Song";

function App() {
  const [searchLyric, setsSearchLyric] = useState({});
  const [lyric, setLyric] = useState("");

  useEffect(() => {
    if (Object.keys(searchLyric).length === 0) return;

    const fetchAPILyric = async () => {
      const { artist, song } = searchLyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const result = await axios(url);
      setLyric(result.data.lyrics);
    };
    fetchAPILyric();
  }, [searchLyric]);

  return (
    <Fragment>
      <Form setsSearchLyric={setsSearchLyric} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
