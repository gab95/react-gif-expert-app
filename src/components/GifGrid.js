import React from "react";

import { GifGritItem } from "./GifGritItem";

import { useFerchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFerchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>

      {loading && <p className="animate__animated animate__flash">loading</p>}

      <div className="card-grid animate__animated animate__fadeIn">
        {images.map((img) => (
          <GifGritItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
