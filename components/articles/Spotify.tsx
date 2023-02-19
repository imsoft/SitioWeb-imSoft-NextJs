import React from "react";

interface Props {
  podcast: string;
}

const Spotify = ({ podcast }: Props) => {
  return (
    <>
      <iframe
        className="rounded-xl"
        src={`https://open.spotify.com/embed/episode/${podcast}?utm_source=generator&theme=0&t=0`}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Spotify;
