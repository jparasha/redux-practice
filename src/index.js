import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDjxEPlALmeVymiliH22_z_4OuDAy7rLwU';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {videos : []};
    YTSearch(
      { key: API_KEY, term: 'Cat' }, (videos)=> 
        {
          this.setState({videos});
          console.log(videos); 
        }
    );
  }
  
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
      </div>
    );

  };
};


ReactDOM.render(<App />, document.querySelector('.container'));