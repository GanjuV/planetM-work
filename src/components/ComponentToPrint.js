import React from "react";
import ImageList from "./ImageList";

class ComponentToPrint extends React.Component {
  render() {
    return <ImageList image={this.props.printImages} />;
  }
}

export default ComponentToPrint;
