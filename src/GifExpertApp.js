import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["dragon ball"]);

  //solo para referencia
  //   const handleAdd = () => {
  //   setCategories([...categories, "fasdf"]);
  //   setCategories((cats) => [...cats, "asdfg"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
