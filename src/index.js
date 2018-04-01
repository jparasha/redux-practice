import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDjxEPlALmeVymiliH22_z_4OuDAy7rLwU';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      videos: [],
      selectedVideo: null

    };

    this.videoSearch('ICC');
  }
  videoSearch(term){
    YTSearch(
      { key: API_KEY, term: term }, (videos)=> 
        {
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
        }
    );
  };
  
  
  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
        <VideoDetail video ={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} 
        />
      </div>
    );

  };
};


ReactDOM.render(<App />, document.querySelector('.container'));