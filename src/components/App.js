import "./ImageList.css";
import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

class App extends React.Component {
  state = { images: [], printImages: [] };
  componentRef;
  onSearchSubmit = async (_state) => {
    _state.setState({ loading: true });
    const responce = await unsplash.get("/search/photos", {
      params: { query: _state.state.term },
    });
    if (responce) {
      _state.setState({ loading: false });
      this.setState({ images: responce.data.results });
    } else {
      this.setState({ image: [] });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList image={this.state.images} parentState={this} />
        <div style={{ display: "none" }}>
          <ComponentToPrint
            bodyClass="wrapper-imagecard"
            ref={(el) => (this.componentRef = el)}
            printImages={this.state.printImages}
          />
        </div>
      </div>
    );
  }
}

export default App;
