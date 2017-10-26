class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ''
    };
  }
  
  sendSearchString(event) {
    this.setState({
      query: event.target.value
    }, this.updateSearch);
  }
  
  updateSearch() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: this.state.query,
      max: 5,
    };
    this.props.searchYouTube(options, this.props.appStateChanger);
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={this.sendSearchString.bind(this)} className="form-control" type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
