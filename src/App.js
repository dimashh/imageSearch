import React from 'react';
import axios from 'axios';
import Search from './Search';
import ImageComponent from './ImageComponent';

class App extends React.Component  {
    state = { images: [] };

    onSearchSubmit = async (term) => {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers: {
          // API YOUR_ACCESS_KEY goes here
          Authorization: 'Client-ID YOUR_ACCESS_KEY'
        }
      })
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div>
                <Search onSearchSubmit={this.onSearchSubmit}/>
                <ImageComponent images={this.state.images}/>
            </div>
        )
    }

}

export default App
