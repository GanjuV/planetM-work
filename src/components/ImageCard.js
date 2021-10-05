import "./ImageCard.css";
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, isSelected: false };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  selectImage = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div
        onClick={this.selectImage}
        style={{ gridRowEnd: `span ${this.state.spans}`, cursor: "pointer" }}
      >
        {this.state.isSelected && (
          <>
            <div className="wrapper">
              <i className="paperclip icon"></i>
            </div>
          </>
        )}
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
