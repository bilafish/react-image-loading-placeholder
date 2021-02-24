import { useState } from "react";
import ReactPlaceholder from "react-placeholder";
const ImageLoader = ({ imgSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);
  const handleImgLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && (
        <ReactPlaceholder
          type="media"
          ready={isLoaded}
          style={{ height: 333.328, width: 500 }}
        ></ReactPlaceholder>
      )}
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
