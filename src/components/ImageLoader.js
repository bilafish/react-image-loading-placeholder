import { useState } from "react";

const ImageLoader = ({ imgSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);
  const handleImgLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <p>Loading...</p>}
      <img
        src={imgSrc}
        alt=""
        width="500px"
        onLoad={handleImgLoaded}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </>
  );
};
export default ImageLoader;
