var searchYouTube = (options = {key: YOUTUBE_API_KEY, query: '', max: 5}, callback = () => {}) => {
  // TODO
  var data = {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    type: 'video'
  };
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: data,
    method: 'GET',
    success: (data) => { 
      callback(data.items); 
    }
  });
};

window.searchYouTube = searchYouTube;
