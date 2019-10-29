import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit= async (term) => {
    const responce = await unsplash.get('/search/photos',{
      params: { query: term }
    });
    this.setState({ images: responce.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList image={this.state.images} />
      </div>
    );
  }
}

export default App;