import React, { Component } from "react";

const Album = ({ album }) => {
  return (
    <div>
      <h1>{album.title}</h1>
      <h2>{album.artist.join("-")}</h2>
      <img src={album.coverUrl} alt="" />
    </div>
  );
};

export default Album;
