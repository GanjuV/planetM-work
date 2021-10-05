import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const setImage = (image) => {
    if (props.parentState === undefined || props.parentState === null) return;
    let imgData = props.parentState.state.printImages;
    const dataObj = props.parentState.state.printImages;

    if (props.parentState.state.printImages.length === 0) {
      props.parentState.setState({
        printImages: [image],
      });
      return;
    }
    const found = dataObj.filter((ele) => ele.id === image.id).length === 1;
    if (found) {
      imgData = dataObj.filter((ele) => ele.id !== image.id);
    } else {
      imgData.push(image);
    }
    props.parentState.setState({
      printImages: imgData,
    });
  };

  return (
    <div className="image-list">
      {props.image.length > 0 ? (
        props.image.map((image) => {
          return (
            <div
              key={`${image.id}-wrapper`}
              className="wrapper-imagecard"
              onClick={() => setImage(image)}
            >
              <ImageCard key={image.id} image={image} />
            </div>
          );
        })
      ) : (
        <div>No image found</div>
      )}
    </div>
  );
};

export default ImageList;
