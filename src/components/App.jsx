class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      listVideos: exampleVideoData,
      playerVideo: exampleVideoData[0]
    };
  }
  
  componentWillMount() {
    this.props.searchYouTube(undefined, this.onSearchLoad.bind(this));
  }
  
  onTitleClick(selectedVideo) {
    this.setState({
      playerVideo: selectedVideo
    });
  }
  
  onSearchLoad(loadedResults) {
    this.setState({
      listVideos: loadedResults,
      playerVideo: loadedResults[0]
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo} />
          </div>
          <div className="col-md-5">
            <VideoList clickHandler={this.onTitleClick.bind(this)} videos={this.state.listVideos} />
          </div>
        </div>
      </div>    
    );
  }  
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


