import React, { useState } from "react";

const Form = ({ setsSearchLyric }) => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });
  const [error, setError] = useState(false);
  const { artist, song } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setsSearchLyric(search);
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          All fields are mandatory.
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            action=""
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend className="text-center">Search Songs Lyrics</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist Name"
                      onChange={handleChange}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song Name"
                      onChange={handleChange}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary float-right" type="submit">
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
